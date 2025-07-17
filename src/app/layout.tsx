import type { Metadata } from "next";
import "./globals.css";
import { getLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes'
import { HeroUIProvider } from "@heroui/system";

export const metadata: Metadata = {
  title: "Qrderly - Easy Order",
  description: "Qrderly by MaoTek",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <HeroUIProvider>
            <NextIntlClientProvider>
              {children}
            </NextIntlClientProvider>
          </HeroUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
