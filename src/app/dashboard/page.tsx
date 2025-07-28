import Login from "@/components/Dashboard/Login";
import OrderNavbar from "@/components/Order/OrderNavbar";
import { getTranslations } from "next-intl/server";


export async function generateMetadata() {
  // This automatically uses the locale resolved in getRequestConfig()
  const t = await getTranslations('Order');

  return {
    title: t('browserTitle')
  };
}


export default async function Page() {
    return (
        <>
            <OrderNavbar name={"Qrderly Dashboard"}/>
            <div className="flex flex-col h-screen pt-20 bg-body-2 text-heading-1">
                <Login />
            </div>
        </>
    )
}