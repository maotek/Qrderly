import logo from "../../assets/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { locales } from "@/i18n/config";
import { Options } from "./Options";
import { getTranslations } from "next-intl/server";


const OrderHeader = async () => {
    const t = await getTranslations("Order");
    // await new Promise((resolve) => {
    //     setTimeout(resolve, 500);
    // })
    return (
        <header className='bg-body-1 w-full absolute p-2'>
            <nav className='flex flex-row justify-between'>
                <div>
                    <Link href="/order" className="flex flex-row p-2 items-center">
                        <Image className="dark:invert h-[50] w-auto"
                            src={logo}
                            width={48}
                            height={48}
                            alt='Logo'
                        />
                        <div className='flex items-center pl-3 font-bold text-2xl'>
                            <h1 className="text-heading-1">
                                {t('title')}
                            </h1>
                        </div>
                    </Link>
                </div>

                <div className='flex items-center pr-3'>
                    <Options supportedLocales={locales} />
                </div>
            </nav>
        </header>
    )
}

export default OrderHeader