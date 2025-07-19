'use client';

import {
    DishData,
    Translation
} from '@/data/mockData';
import Image from 'next/image';


interface DishCardProps {
    dish: DishData;
    locale: keyof Translation;
}

export function DishCard({ dish, locale }: DishCardProps) {
    const title = dish.name[locale] ?? dish.name.en;
    const description = dish.description[locale] ?? dish.description.en;
    return (
        <div className="p-4 bg-body-2 rounded-lg shadow text-center text-heading-1 flex flex-col">
            <Image
                src={'/assets/hamburger.jpg'}
                alt={title}
                width={160}
                height={120}
                className="mx-auto pb-2 rounded object-cover w-[160] h-[120]"
                priority
            />
            <div>
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-sm mb-2">{description}</p>
                <p className="text-sm font-medium">${dish.price.toFixed(2)}</p>
            </div>
        </div>
    );
}