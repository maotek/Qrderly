import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';

export async function generateMetadata() {
  // This automatically uses the locale resolved in getRequestConfig()
  const t = await getTranslations('Page');

  return {
    title: t('title')
  };
}

export default function HomePage() {
  const t = useTranslations('HomePage');
  return <h1>{t('title')}</h1>;
}