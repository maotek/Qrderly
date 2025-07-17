'use server';

import { cookies, headers } from 'next/headers';
import { defaultLocale, locales } from '@/i18n/config';

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = 'NEXT_LOCALE';

// Locale switcher example taken from here: https://github.com/amannn/next-intl/blob/main/examples/example-app-router-without-i18n-routing/src/i18n/request.ts
export async function getUserLocale() {
    const savedLocale = (await cookies()).get(COOKIE_NAME)?.value;
    if (savedLocale !== undefined) {
        return savedLocale;
    } else {
        const acceptLanguage = (await headers()).get('accept-language') ?? '';
        const raw = acceptLanguage.split(',')[0]?.split('-')[0];
        const locale = locales.includes(raw) ? raw : defaultLocale;
        return locale;
    }
}

export async function setUserLocale(locale: string) {
    (await cookies()).set(COOKIE_NAME, locale);
}