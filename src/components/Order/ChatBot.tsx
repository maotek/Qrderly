"use client";

import { Button } from '@heroui/react'
import { BotIcon } from 'lucide-react';
import { useState } from 'react'

const ChatBot = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="fixed bottom-4 right-26 p-2 z-20">
                <button onClick={() => setOpen(o => !o)} className='min-w-max max-w-max min-h-max max-h-none h-auto p-4 bg-body-2 rounded-xl'>
                    <BotIcon size={42} className='dark:invert'/>
                </button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 opacity-75 bg-body-2"
                        onClick={() => setOpen(false)}
                    />

                    <div className="relative w-[70vw] h-[70vh] bg-body-1 rounded-lg shadow-lg overflow-auto text-heading-1 p-2">
                        Hello world
                    </div>
                </div>
            )}
        </>
    )
}

export default ChatBot