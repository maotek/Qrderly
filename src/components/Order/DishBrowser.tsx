'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { fetchCategories, CategoryData, DishData, Translation } from '@/data/mockData';

export default function DishBrowser() {
  // Set locale as a key type for Translation.
  const locale = useLocale() as keyof Translation;
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [selected, setSelected] = useState<CategoryData | null>(null);
  const [selectedTag, setSelectedTag] = useState<Translation | null>(null);

  useEffect(() => {
    fetchCategories().then((data) => {
      setCategories(data);
      if (data.length > 0) {
        setSelected(data[0]);
        setSelectedTag(null);
      }
    });
  }, []);

  const selectCategory = (cat: CategoryData) => {
    setSelected((prev) => prev?.category[locale] === cat.category[locale] ? null : cat);
    setSelectedTag(null);
  };

  // Aggregate unique tags for the selected category
  const tags: Translation[] = selected
    ? Array.from(new Set(selected.dishes.flatMap((dish: DishData) => dish.tags.map((t) => JSON.stringify(t))))).map((json) => JSON.parse(json) as Translation)
    : [];

  // Filter dishes by selected tag
  const filteredDishes: DishData[] = selected
    ? selected.dishes.filter((dish) => selectedTag ? dish.tags.some((t) => t.nl === selectedTag.nl) : true)
    : [];

  return (
    <div className="flex flex-col flex-1 pt-20 overflow-hidden">
      {/* Category picker */}
      <div className="overflow-x-auto -webkit-overflow-scrolling-touch py-4 px-2 bg-body-2 flex gap-4 pl-4">
        {categories.map((catData) => {
          const isActive = selected?.category[locale] === catData.category[locale];
          return (
            <button key={catData.category.en} onClick={() => selectCategory(catData)} className={`flex-none inline-flex items-center justify-center px-4 py-2 rounded-lg shadow text-lg whitespace-nowrap transition ${isActive ? 'bg-primary text-heading-1' : 'bg-body-1 text-heading-1'}`}>
              {catData.category[locale] ?? catData.category.en}
            </button>
          );
        })}
      </div>

      {/* Tag filter */}
      {selected && tags.length > 0 && (
        <div className="overflow-x-auto -webkit-overflow-scrolling-touch py-2 px-2 bg-body-3 flex gap-4 pl-4">
          <button onClick={() => setSelectedTag(null)} className={`flex-none inline-flex items-center justify-center px-3 py-1 rounded-lg shadow text-sm whitespace-nowrap transition ${!selectedTag ? 'bg-primary text-heading-1' : 'bg-body-1 text-heading-1'}`}>
            {locale === 'nl' ? 'Alles' : locale === 'en' ? 'All' : '全部'}
          </button>
          {tags.map((tag) => {
            const isActive = selectedTag?.nl === tag.nl;
            return (
              <button key={tag.en} onClick={() => setSelectedTag(tag)} className={`flex-none inline-flex items-center justify-center px-3 py-1 rounded-lg shadow text-sm whitespace-nowrap transition ${isActive ? 'bg-primary text-heading-1' : 'bg-body-1 text-heading-1'}`}>
                {tag[locale] ?? tag.en}
              </button>
            );
          })}
        </div>
      )}

      {/* Dishes scrollable list */}
      <div className="flex-1 px-4 pt-4 bg-body-1 overflow-y-auto pb-20">
        {!selected ? (
          <p className="text-center text-gray-500 mt-8">
            {locale === 'nl' ? 'Selecteer een categorie om gerechten te zien…' : locale === 'en' ? 'Select a category to see dishes…' : '选择一个类别以查看菜品…'}
          </p>
        ) : (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center text-heading-1">
              {selected.category[locale] ?? selected.category.en}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {filteredDishes.map((dish: DishData) => (
                <div key={dish.name.en} className="p-4 bg-body-2 rounded-lg shadow text-center text-heading-1">
                  <h3 className="text-lg font-semibold mb-1">
                    {dish.name[locale] ?? dish.name.en}
                  </h3>
                  <p className="text-sm mb-2">
                    {dish.description[locale] ?? dish.description.en}
                  </p>
                  <p className="text-sm font-medium">
                    ${dish.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
