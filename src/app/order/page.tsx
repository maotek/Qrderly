import ChatBot from '@/components/ChatBot';
import Basket from '@/components/Order/Basket';
import OrderNavbar from '@/components/Order/OrderNavbar';
import { Menu } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  // This automatically uses the locale resolved in getRequestConfig()
  const t = await getTranslations('Page');

  return {
    title: t('title')
  };
}

export default function Order() {
  return (
    <>
      <ChatBot/>
      <Basket />
      <OrderNavbar />
      <div className='pt-24 px-4 pb-4 w-full h-screen bg-body-2'>
          <Menu/>
      </div>
    </>
  )
}