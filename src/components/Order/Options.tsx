"use client"

import { setUserLocale } from '@/services/locale';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, ButtonGroup } from '@heroui/react';
import { Moon, Sun } from 'lucide-react';
import { Locale, useLocale, useTranslations } from "next-intl";
import { useTheme } from 'next-themes';
import { useTransition } from 'react';

interface OptionsProps {
    supportedLocales: string[];
}


export const Options = ({ supportedLocales }: OptionsProps) => {
    const locale = useLocale();
    const { theme, setTheme } = useTheme();
    const t = useTranslations('locales');

    /* To prevent Hydration Error, you can use this snippet to wait to mount before rendering the icons, but without it looks cleaner imo. */
    // const [mounted, setMounted] = useState(false);

    // useEffect(() => {
    //     setMounted(true);
    // }, [])

    // // Wait for client to mount
    // if (!mounted) {
    //     /* Render a placeholder */
    //     return <></>
    // }

    const [isPending, startTransition] = useTransition();

    function onChange(value: string) {
        const locale = value as Locale;
        startTransition(() => {
            setUserLocale(locale);
        });
    }

    return (
        <div className='flex flex-row'>
            <ButtonGroup className='overflow-hidden rounded-xl border-2 border-black dark:border-white' >
                <Button className='overflow-hidden bg-body-1 min-w-0 border-r-2 border-black dark:border-white' onPress={() => setTheme(theme === "light" ? "dark" : "light")}>
                    <span className='dark:invert' suppressHydrationWarning>
                        {theme === "dark" ? <Sun /> : <Moon />}
                    </span>
                </Button>
                <Dropdown className='min-w-0'>
                    <DropdownTrigger>
                        <Button className='min-w-0 text-heading-1 bg-body-1'>{locale.toUpperCase()}</Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        {supportedLocales.map((item, key) => (
                            <DropdownItem className={`text-center ${locale === item ? 'bg-gray-300' : ''}`} key={key} onPress={() => onChange(item)}>{t(item)}</DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </ButtonGroup>
        </div>
    )
}
