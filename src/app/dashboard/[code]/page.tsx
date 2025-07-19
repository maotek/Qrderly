import Login from "@/components/Dashboard/Login";
import OrderNavbar from "@/components/Order/OrderNavbar";
import { Restaurant } from "@/types/types";


const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;


async function fetchRestaurant(code: string): Promise<Restaurant> {
    const res = await fetch(`${BACKEND_URL}/api/restaurants/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error(`Restaurant not found: ${res.status}`);
    }
    return res.json();
}

interface PageProps {
    params: Promise<{ code: string }>;
}

export default async function Page({ params }: PageProps) {
    const { code } = await params;

    // await new Promise((resolve) => {
    //     setTimeout(resolve, 4000);
    // })

    let restaurant: Restaurant;
    try {
        restaurant = await fetchRestaurant(code);
    } catch (error: unknown) {
        // handle server-side fetch errors or show fallback
        return <p className="text-center text-red-500 mt-8 font-bold">{`Failed to fetch restaurant ${code}`}</p>;
    }

    return (
        <>
            <OrderNavbar restaurant={restaurant} />
            <div className="flex flex-col h-screen pt-20 bg-body-1 text-heading-1">
                <Login restaurant={restaurant} />
            </div>
        </>
    )
}