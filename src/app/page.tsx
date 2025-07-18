import Link from 'next/link';
import { useTranslations } from 'next-intl';
import OrderNavbar from '@/components/Order/OrderNavbar';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <main className="relative h-screen w-full bg-cover bg-center]">
      <OrderNavbar/>
      <div className="pt-20 h-full inset-0 bg-black flex flex-col items-center justify-center bg-cover bg-no-repeat bg-[url('/assets/landing-bg.png')]">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center mb-6 animate-fadeInUp drop-shadow-[0_0_10px_rgba(0,0,1,1)]">
          {t('headline')}
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fadeInUp delay-200 text-center drop-shadow-[0_0_6px_rgba(0,0,0,1)]">
          {t('subhead')}
        </p>

        <Link href="/order" className="px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-[0_0_6px_rgba(0,0,0,1)] text-white font-bold rounded-full text-lg animate-pulse transition-all duration-300">
          {t('demo')}
        </Link>
      </div>
    </main>
  );
}