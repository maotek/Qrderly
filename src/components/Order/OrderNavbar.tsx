import Image from 'next/image';
import Link from 'next/link';
import { locales } from "@/i18n/config";
import { Options } from "./Options";
import { getTranslations } from "next-intl/server";
import { Restaurant } from '@/types/types';
import { HandPlatter } from 'lucide-react';


interface OrderNavbarProps {
    restaurant?: Restaurant | null;
    table_number?: number | null;
}


const DEFAULT_LOGO = '/assets/logo.png';
const DEFAULT_NAME = 'Example';


const OrderNavbar = async ({ restaurant = null, table_number = null }: OrderNavbarProps) => {
    const t = await getTranslations("Order");

    const name = restaurant?.name ?? DEFAULT_NAME;
    const logoSrc: string = restaurant?.logo_url ?? DEFAULT_LOGO;

    return (
        <header className='flex bg-body-1 w-full absolute px-4 py-5 h-20'>
            <nav className='flex flex-1 flex-row justify-between'>
                <div>
                    <Link href="/order" className="flex flex-row items-center">
                        <Image className="h-[42] w-auto"
                            src={logoSrc}
                            width={42}
                            height={42}
                            alt='Logo'
                        />
                        <div className='flex flex-row gap-2 items-center pl-3 font-bold text-xl text-heading-1'>
                            <h1 className="text-heading-1">
                                {name}
                            </h1>

                            {table_number &&
                                <>
                                    <HandPlatter />
                                    <h1>
                                        {table_number}
                                    </h1>
                                </>
                            }
                        </div>
                    </Link>
                </div>

                <div className='flex items-center'>
                    <Options supportedLocales={locales} />
                </div>
            </nav>
        </header>
    )
}

export default OrderNavbar;