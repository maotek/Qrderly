import ChatBot from '@/components/Order/ChatBot';
import DishBrowser from '@/components/Order/DishBrowser';
import OrderNavbar from '@/components/Order/OrderNavbar';
import { getTranslations } from 'next-intl/server';
import { Table } from '@/types/types';
import { CategoryData, fetchCategories } from '@/data/mockData';


const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;


export async function generateMetadata() {
  // This automatically uses the locale resolved in getRequestConfig()
  const t = await getTranslations('Order');

  return {
    title: t('browserTitle')
  };
}


async function fetchTable(code: string): Promise<Table> {
  const res = await fetch(`${BACKEND_URL}/api/tables/`, {
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

      <OrderNavbar restaurant={table.restaurant} table_number={table.table_number} />
      <DishBrowser dishData={dishData}/>
    </main>
  )
}