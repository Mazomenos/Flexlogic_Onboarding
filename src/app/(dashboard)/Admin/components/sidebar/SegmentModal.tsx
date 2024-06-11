import React from 'react';
import Modal from '@/components/Modal';
import { DialogTitle } from '@headlessui/react';
import BrakeRule from '@/components/BrakeRule';
import ListItem from '@/components/ListItem';
import GenericButton from '@/components/GenericButton';
import { EDISegments } from "../../../../../../prisma/EDISegments";
import { EDISegment } from "../../../../../../prisma/interfaces/EDIInterfaces";

export default function SegmentModal({
    isOpen,
    setIsOpen,
    usedSegments,
    addSegment
}: {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    usedSegments: string[];
    addSegment: (segment: EDISegment) => void;
}) {
    const availableSegments = EDISegments.filter(
        (segment) => !usedSegments.includes(segment.Segment)
    );

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <DialogTitle className="text-2xl">Segments</DialogTitle>
            <BrakeRule classname="my-3" />
            <div className="max-h-fit flex flex-col items-center w-full overflow-y-auto overscroll-none">
                {availableSegments.map((segment) => (
                    <ListItem key={segment.Segment}>
                        <div className='basis-10/12'>
                            <p> {segment.Name} Connection </p>
                        </div>
                        <div className='basis-2/12'>
                            <GenericButton onClick={() => addSegment(segment)}>
                                Add
                            </GenericButton>
                        </div>
                    </ListItem>
                ))}
            </div>
        </Modal>
    );
}
