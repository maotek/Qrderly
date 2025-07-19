import Login from "@/components/Dashboard/Login";
import OrderNavbar from "@/components/Order/OrderNavbar";

export default async function Page() {
    return (
        <>
            <OrderNavbar/>
            <div className="flex flex-col h-screen pt-20 bg-body-1 text-heading-1">
                {/* <Login restaurant={restaurant} /> */}
            </div>
        </>
    )
}