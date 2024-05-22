'use client'

import { DialogTitle, Description } from '@headlessui/react'
import Modal from '@/components/Modal'
import React from 'react'
import { TfiLayoutLineSolid } from "react-icons/tfi";
import CancelButton from '@/components/CancelButton'
import ListItem from '@/components/ListItem'
import BrakeRule from '@/components/BrakeRule'
import BackButton from '@/components/BackButton'
import AddButton from '@/components/AddButton'


type Errors = {
    id: number
    typeError: string
    desc: string
}

export default function Errors() {
    const errors: Errors[] = [

        {
            id: 1,
            typeError: 'Segmentacion',
            desc: 'This is a mandatory document',
        },
        {
            id: 2,
            typeError: 'EDI 860 Purchase Order Change Request',
            desc: 'This is a optional document',
        },
        {
            id: 3,
            typeError: 'EDI 855 Purchase Order Acknowledgment',
            desc: 'This is a mandatory document',
        },
        {
            id: 4,
            typeError: 'EDI 856 Ship Notice/Manifest',
            desc: 'This is a mandatory document',
        },
        {
            id: 5,
            typeError: 'EDI 810 Invoice',
            desc: 'This is a mandatory document',
        },
        {
            id: 6,
            typeError: 'EDI 997 Functional Acknowledgment',
            desc: 'This is a mandatory document',
        },
        {
            id: 7,
            typeError: 'EDI 860 Purchase Order Change Request',
            desc: 'This is a optional document',
        },
    ]

    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <>
            <div className='grid justify-items-end'>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <DialogTitle className="text-2xl">ERRORS</DialogTitle>
                <BrakeRule classname="my-3" />
                <div className="max-h-fit flex flex-col items-center w-full overflow-y-auto overscroll-none">
                    {errors.map((errors) => (
                        <ListItem key={errors.id}>
                            <p> type: {errors.typeError} </p>
                            <TfiLayoutLineSolid
                                style={{ transform: "rotate(90deg)" }}
                                className="grid content-center h-full"
                                size={32}
                            />
                            <p>{errors.desc}</p>
                        </ListItem>
                    ))}
                </div>
                <BrakeRule classname="my-3" />
                <div className="absolute bottom-2 w-full flex justify-center">
                    <CancelButton onClick={() => setIsOpen(false)} />{' '}
                </div>
            </Modal>
        </>
    )
}