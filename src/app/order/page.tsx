import ChatBot from '@/components/Order/ChatBot';
import Basket from '@/components/Order/Basket';
import DishBrowser from '@/components/Order/DishBrowser';
import OrderNavbar from '@/components/Order/OrderNavbar';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  // This automatically uses the locale resolved in getRequestConfig()
  const t = await getTranslations('Order');

  return {
    title: t('browserTitle')
  };
}

export default function Order() {
  return (
    <main className='flex flex-col h-screen'>
      <ChatBot/>
      {/* <Basket /> */}
      <OrderNavbar/>
      <DishBrowser />
    </main>
  )
}