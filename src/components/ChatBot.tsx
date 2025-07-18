"use client";

import { Button } from '@heroui/react'
import { BotIcon } from 'lucide-react';
import { useState } from 'react'

const ChatBot = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="fixed bottom-4 right-4 p-2 z-20">
                <Button onPress={() => setOpen(o => !o)} className='bg-body-1 min-w-0 max-w-max min-h-0 h-auto p-2'>
                    <BotIcon size={48} className='dark:invert min-w-max'/>
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

export default ChatBot