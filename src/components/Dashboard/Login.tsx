import { Restaurant } from '@/types/types';
import Image from 'next/image';

interface LoginProps {
  restaurant: Restaurant;
}

export default function Login({ restaurant }: LoginProps) {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">{restaurant.name}</h1>
      {restaurant.logo_url && (
        <div className="flex justify-center mb-4">
          <Image
            src={restaurant.logo_url}
            alt={`${restaurant.name} logo`}
            width={192}
            height={192}
            className="object-contain rounded-lg shadow"
            unoptimized
          />
        </div>
      )}
      {/* Add more dashboard content here */}
    </div>
  );
}
