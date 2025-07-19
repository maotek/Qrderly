import ChatBot from '@/components/Order/ChatBot';
import Basket from '@/components/Order/Basket';
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

export default async function Page() {

  // Fetch dish data
  let dishData: CategoryData[];
  try {
    dishData = await fetchCategories();
  } catch (error: unknown) {
    return <p className="text-center text-red-500 mt-8 font-bold">{`Failed to fetch restaurant dishes ${code}`}</p>;
  }


  return (
    <main className='flex flex-col h-screen'>
      <ChatBot/>

      <OrderNavbar/>
      <DishBrowser dishData={dishData}/>
    </main>
  )
}