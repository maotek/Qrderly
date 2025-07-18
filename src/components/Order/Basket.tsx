"use client";

import { Button } from '@heroui/react'
import { ShoppingBasketIcon } from 'lucide-react';
import { useState } from 'react'

const Basket = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="fixed bottom-4 right-24 p-2 z-20">
                <Button onPress={() => setOpen(o => !o)} className='min-w-max p-2 min-h-max bg-body-1'>
                    <ShoppingBasketIcon size={48} className='min-w-max dark:invert'/>
                </Button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 opacity-90 bg-body-1"
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