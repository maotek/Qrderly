import Image from 'next/image';
import Link from 'next/link';
import { locales } from "@/i18n/config";
import { Options } from "./Options";
import { getTranslations } from "next-intl/server";
import { HandPlatter } from 'lucide-react';


interface OrderNavbarProps {
    logo_url?: string | null;
    name?: string | null;
    table_number?: number | null;
}


const OrderNavbar = async ({ table_number = null, logo_url = "/assets/logo.png", name = "DEMO" }: OrderNavbarProps) => {
    const t = await getTranslations("Order");

    return (
        <header className='flex bg-body-1 w-full absolute px-4 py-5 h-20 z-50'>
            <nav className='flex flex-1 flex-row justify-between'>
                <div className='flex items-center'>
                    <Link href="/order" className="flex flex-row items-center">
                        <Image className="h-[34] w-auto rounded"
                            src={logo_url as string}
                            width={34}
                            height={34}
                            alt='Logo'
                        />
                        <div className='flex flex-row gap-2 items-center pl-3 font-bold text-heading-1'>
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