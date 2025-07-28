import ChatBot from '@/components/Order/ChatBot';
import DishBrowser from '@/components/Order/DishBrowser';
import OrderNavbar from '@/components/Order/OrderNavbar';
import { getTranslations } from 'next-intl/server';
import { CategoryData, fetchCategories } from '@/data/mockData';


export async function generateMetadata() {
  // This automatically uses the locale resolved in getRequestConfig()
  const t = await getTranslations('Order');

  return {
    title: t('browserTitle')
  };
}

export interface Restaurant {
  name: string;
  logo_url?: string | null;
}

export interface Table {
  table_number: number;
  restaurant: Restaurant;
}

async function fetchTable(code: string): Promise<Table> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/table/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Restaurant not found: ${res.status}`);
  }
  return res.json();
}

interface PageProps {
  params: Promise<{ code: string }>;
}

export default async function Page({ params }: PageProps) {
  const { code } = await params;

  // Fetch table data
  let table: Table;
  try {
    table = await fetchTable(code);
  } catch (error: unknown) {
    return <p className="text-center text-red-500 mt-8 font-bold">{`Failed to fetch restaurant ${code}`}</p>;
  }

  // Fetch dish data
  let dishData: CategoryData[];
  try {
    dishData = await fetchCategories();
  } catch (error: unknown) {
    return <p className="text-center text-red-500 mt-8 font-bold">{`Failed to fetch restaurant dishes ${code}`}</p>;
  }



  return (
    <main className='flex flex-col h-screen'>
      <ChatBot />

      <OrderNavbar name={table.restaurant.name} table_number={table.table_number} logo_url={table.restaurant.logo_url}/>
      <DishBrowser dishData={dishData}/>
    </main>
  )
}