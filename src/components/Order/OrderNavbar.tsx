import logo from "../../assets/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { locales } from "@/i18n/config";
import { Options } from "./Options";
import { getTranslations } from "next-intl/server";


const OrderNavbar = async () => {
    const t = await getTranslations("Order");
    // await new Promise((resolve) => {
    //     setTimeout(resolve, 1000);
    // })
    return (
        <header className='flex bg-body-1 w-full absolute px-4 py-5 h-20'>
            <nav className='flex flex-1 flex-row justify-between'>
                <div>
                    <Link href="/order" className="flex flex-row items-center">
                        <Image className="dark:invert h-[42] w-auto"
                            src={logo}
                            width={42}
                            height={42}
                            alt='Logo'
                        />
                        <div className='flex items-center pl-3 font-bold text-xl'>
                            <h1 className="text-heading-1">
                                {t('title')}
                            </h1>
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

export default OrderNavbar