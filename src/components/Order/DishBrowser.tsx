'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { fetchCategories, CategoryData, DishData, Translation } from '@/data/mockData';
import Basket from './Basket';
import { DishCard } from './DishCard';

export default function DishBrowser() {
  // Set locale as a key type for Translation.
  const locale = useLocale() as keyof Translation;
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [selected, setSelected] = useState<CategoryData | null>(null);
  // Allow multiple tags
  const [selectedTags, setSelectedTags] = useState<Translation[]>([]);

  useEffect(() => {
    fetchCategories().then((data) => {
      setCategories(data);
      if (data.length > 0) {
        setSelected(data[0]);
        setSelectedTags([]);
      }
    });
  }, []);

  const selectCategory = (cat: CategoryData) => {
    setSelected((prev) =>
      prev?.category[locale] === cat.category[locale] ? null : cat
    );
    setSelectedTags([]);
  };

  // Aggregate unique tags for the selected category
  const tags: Translation[] = selected
    ? Array.from(
      new Set(
        selected.dishes
          .flatMap((dish: DishData) => dish.tags.map((t) => JSON.stringify(t)))
      )
    ).map((json) => JSON.parse(json) as Translation)
    : [];

  // Filter dishes by any selected tags (show all if none)
  const filteredDishes: DishData[] = selected
    ? selected.dishes.filter((dish) =>
      selectedTags.length > 0
        ? dish.tags.some((t) =>
          selectedTags.some((st) => st.nl === t.nl)
        )
        : true
    )
    : [];

  return (
    <div className="flex flex-col flex-1 pt-20 overflow-hidden">
      {/* Category picker */}
      <div className="overflow-x-auto -webkit-overflow-scrolling-touch py-4 px-2 bg-body-2 flex gap-4 pl-4">
        {categories.map((catData) => {
          const isActive =
            selected?.category[locale] === catData.category[locale];
          return (
            <button
              key={catData.category.en}
              onClick={() => selectCategory(catData)}
              className={`flex-none inline-flex items-center justify-center px-4 py-2 rounded-lg shadow text-lg whitespace-nowrap transition text-heading-1 ${isActive
                  ? 'bg-body-3 scale-105 border border-black dark:border-white'
                  : 'bg-body-1 scale-100'
                }`}
            >
              {catData.category[locale] ?? catData.category.en}
            </button>
          );
        })}
      </div>

      {/* Tag filter */}
      {selected && tags.length > 0 && (
        <div className="overflow-x-auto -webkit-overflow-scrolling-touch py-2 px-2 bg-body-1 flex gap-4 pl-4">
          <button
            onClick={() => setSelectedTags([])}
            className={`flex-none inline-flex items-center justify-center px-3 py-1 rounded-lg shadow text-sm whitespace-nowrap transition text-heading-1 ${selectedTags.length === 0
                ? 'bg-body-3 scale-105 border border-black dark:border-white'
                : 'bg-body-2 scale-100'
              }`}
          >
            {locale === 'nl' ? 'Alles' : locale === 'en' ? 'All' : '全部'}
          </button>
          {tags.map((tag) => {
            const isActive = selectedTags.some((st) => st.nl === tag.nl);
            return (
              <button
                key={tag.en}
                onClick={() =>
                  setSelectedTags((prev) =>
                    prev.some((st) => st.nl === tag.nl)
                      ? prev.filter((st) => st.nl !== tag.nl)
                      : [...prev, tag]
                  )
                }
                className={`flex-none inline-flex items-center justify-center px-3 py-1 rounded-lg text-sm whitespace-nowrap transition text-heading-1 ${isActive
                    ? 'bg-body-3 scale-105 border border-black dark:border-white'
                    : 'bg-body-2 scale-100'
                  }`}
              >
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
            {locale === 'nl'
              ? 'Selecteer een categorie om gerechten te zien…'
              : locale === 'en'
                ? 'Select a category to see dishes…'
                : '选择一个类别以查看菜品…'}
          </p>
        ) : (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center text-heading-1">
              {selected.category[locale] ?? selected.category.en}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredDishes.map((dish: DishData) => (
                <DishCard key={dish.name.en} dish={dish} locale={locale} />
              ))}
            </div>
          </section>
        )}
      </div>

      <Basket />
    </div>
  );
}
