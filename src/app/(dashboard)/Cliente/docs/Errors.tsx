// Errors.tsx
'use client'

import { DialogTitle } from '@headlessui/react'
import Modal from '@/components/Modal'
import React from 'react'
import { TfiLayoutLineSolid } from "react-icons/tfi";
import CancelButton from '@/components/CancelButton'
import ListItem from '@/components/ListItem'
import BrakeRule from '@/components/BrakeRule'

type Errors = {
    id: number
    typeError: string
    desc: string
}

export default function Errors({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const errors: Errors[] = [
        { id: 1, typeError: 'Segmentation', desc: 'This is a mandatory document' },
        { id: 2, typeError: 'Elements', desc: 'This is a optional document' },
        { id: 3, typeError: 'Segmentation', desc: 'This is a mandatory document' },
        { id: 4, typeError: 'Elements', desc: 'This is a mandatory document' },
        { id: 5, typeError: 'Elements', desc: 'This is a mandatory document' },
        { id: 6, typeError: 'Segmentation', desc: 'This is a mandatory document' },
        { id: 7, typeError: 'Elements', desc: 'This is a optional document' },
    ];

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <DialogTitle className="text-2xl">ERRORS</DialogTitle>
            <BrakeRule classname="my-3" />
            <div className="max-h-fit flex flex-col items-center w-full overflow-y-auto overscroll-none">
                {errors.map((error) => (
                    <ListItem key={error.id}>
                        <div className='flex flex-row w-full'>
                            <p className='basis-2/6'>{error.typeError}</p>
                            <div className='basis-1/6'>
                                <TfiLayoutLineSolid
                                    style={{ transform: "rotate(90deg)" }}
                                    className="grid content-center h-full"
                                    size={32}
                                />
                            </div>
                            <p className='basis-3/6'>{error.desc}</p>
                        </div>
                    </ListItem>
                ))}
            </div>
            <BrakeRule classname="my-3" />
            <div className="absolute bottom-2 w-full flex justify-center">
                <CancelButton onClick={() => setIsOpen(false)} />{' '}
            </div>
        </Modal>
    )
}
