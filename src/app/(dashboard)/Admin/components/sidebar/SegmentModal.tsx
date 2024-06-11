import React, { useState } from 'react';
import Modal from '@/components/Modal';
import { DialogTitle } from '@headlessui/react';
import BrakeRule from '@/components/BrakeRule';
import ListItem from '@/components/ListItem';
import GenericButton from '@/components/GenericButton';
import { EDISegments } from "../../../../../../prisma/EDISegments";
import { EDIElements } from "../../../../../../prisma/EDIElements";
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
    const [selection, setSelection] = useState('segment');
    const [selectedSegment, setSelectedSegment] = useState('');

    const availableSegments = EDISegments.filter(
        (segment) => !usedSegments.includes(segment.Segment)
    );

    const availableElements = selectedSegment
        ? EDIElements.filter(element => element.Element === selectedSegment)
        : [];

    const handleAddSegment = (segment) => {
        addSegment(segment);
        setSelection('segment');
    };

    const handleSelectChange = (e) => {
        setSelection(e.target.value);
    };

    const handleSegmentChange = (e) => {
        setSelectedSegment(e.target.value);
    };

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <DialogTitle className="text-2xl">Add Item</DialogTitle>
            <BrakeRule classname="my-3" />
            <div className="flex flex-col items-center w-full">
                <select value={selection} onChange={handleSelectChange} className="mb-4 p-2 border rounded">
                    <option value="segment">Segment</option>
                    <option value="element">Element</option>
                    <option value="loop">Loop</option>
                </select>
                <div className='flex flex-col items-center w-full'>
                    {selection === 'segment' && (
                        <div className="max-h-fit flex flex-col items-center w-full ">
                            {availableSegments.map((segment) => (
                                <ListItem key={segment.Segment}>
                                    <div className='basis-10/12'>
                                        <p> {segment.Name} </p>
                                    </div>
                                    <div className='basis-2/12'>
                                        <GenericButton onClick={() => handleAddSegment(segment)}>
                                            Add
                                        </GenericButton>
                                    </div>
                                </ListItem>
                            ))}
                        </div>
                    )}
                    {selection === 'element' && (
                        <div className="flex flex-col items-center w-full">
                            <select value={selectedSegment} onChange={handleSegmentChange} className="mb-4 p-2 border rounded">
                                <option value="">Select Segment</option>
                                {usedSegments.map((segment) => {
                                    const segmentInfo = EDISegments.find(s => s.Segment === segment);
                                    return (
                                        <option key={segment} value={segment}>
                                            {segmentInfo ? segmentInfo.Name : segment}
                                        </option>
                                    );
                                })}
                            </select>
                            <div className="max-h-fit flex flex-col items-center w-full">
                                {availableElements.map((element) => (
                                    <ListItem key={element.Element}>
                                        <div className='basis-10/12'>
                                            <p> {element.Name} </p>
                                        </div>
                                        <div className='basis-2/12'>
                                            <GenericButton onClick={() => handleAddSegment(element)}>
                                                Add
                                            </GenericButton>
                                        </div>
                                    </ListItem>
                                ))}
                            </div>
                        </div>
                    )}
                    {selection === 'loop' && (
                        <div>
                            <p>Loop functionality to be implemented...</p>
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    );
}
