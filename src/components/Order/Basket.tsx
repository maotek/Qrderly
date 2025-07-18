"use client";

import { ShoppingBasketIcon } from 'lucide-react';
import { useState } from 'react'

const Basket = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="fixed bottom-4 right-4 p-2 z-20 drop-shadow-[0_0_8px_rgba(0,0,0,1)]">
                <button onClick={() => setOpen(o => !o)} className='min-w-max max-w-max min-h-max max-h-none h-auto p-4 bg-body-2 rounded-xl'>
                    <ShoppingBasketIcon size={42} className='dark:invert'/>
                </button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 opacity-75 bg-body-2"
                        onClick={() => setOpen(false)}
                    />

                    <div className="relative w-[75vw] h-[75vh] bg-body-1 rounded-lg shadow-lg overflow-auto text-heading-1 p-2">
                        Hello world
                    </div>
                </div>
            )}
        </>
    )
}

export default Basket