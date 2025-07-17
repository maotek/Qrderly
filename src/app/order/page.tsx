import OrderHeader from '@/components/Order/OrderHeader';
import {getTranslations} from 'next-intl/server';

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
        <OrderHeader />
        <div className='pt-24 px-4 w-full h-screen bg-body-2'>Hello</div>
    </>
  )
}