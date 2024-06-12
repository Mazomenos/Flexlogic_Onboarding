import React, { useState } from "react";
import Modal from "@/components/Modal";
import { DialogTitle } from "@headlessui/react";
import BrakeRule from "@/components/BrakeRule";
import ListItem from "@/components/ListItem";
import GenericButton from "@/components/GenericButton";
import { EDISegments } from "../../../../../../prisma/EDISegments";
import { EDIElements } from "../../../../../../prisma/EDIElements";
import { EDISegment } from "../../../../../../prisma/interfaces/EDIInterfaces";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FormModal from "../FormModal";

export default function SegmentModal({
  isOpen,
  setIsOpen,
  usedSegments,
  addSegment,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  usedSegments: string[];
  addSegment: (segment: EDISegment) => void;
}) {
  const [selection, setSelection] = useState("segment");
  const [selectedSegment, setSelectedSegment] = useState("");

  const availableSegments = EDISegments.filter(
    (segment) => !usedSegments.includes(segment.Segment),
  );

  const availableElements = selectedSegment
    ? EDIElements.filter((element) => element.Element === selectedSegment)
    : [];

  const handleAddSegment = (segment: EDISegment) => {
    addSegment(segment);
    setSelection("segment");
  };

  return (
    <FormModal buttonText="Add Item" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="h-full" />
      <h3 className="text-2xl">Add Item</h3>
      <BrakeRule classname="my-3" />
      <div className=" w-[97%]">
        <Select
          value={selection}
          onValueChange={(value) => setSelection(value)}
        >
          <SelectTrigger className="text-lg w-full">
            <SelectValue placeholder="Select a conditional" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="segment">Segment</SelectItem>
            <SelectItem value="element">Element</SelectItem>
            <SelectItem value="loop">Loop</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col overflow-y-auto  h-full items-center w-full">
        <div className="flex max-h-full  flex-col items-center w-full">
          {selection === "segment" && (
            <div className="max-h-fit flex flex-col items-center w-full  ">
              {availableSegments.map((segment) => (
                <ListItem key={segment.Segment}>
                  <div className="basis-10/12">
                    <p> {segment.Name} </p>
                  </div>
                  <div className="basis-2/12">
                    <GenericButton onClick={() => handleAddSegment(segment)}>
                      Add
                    </GenericButton>
                  </div>
                </ListItem>
              ))}
            </div>
          )}
          {selection === "element" && (
            <div className="flex flex-col items-center w-[97%] py-2">
              <Select
                value={selectedSegment}
                onValueChange={(value) => setSelectedSegment(value)}
              >
                <SelectTrigger className="text-lg w-full">
                  <SelectValue placeholder="Select a segment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Segments</SelectLabel>

                    {usedSegments.map((segment) => {
                      const segmentInfo = EDISegments.find(
                        (s) => s.Segment === segment,
                      );
                      return (
                        <SelectItem key={segment} value={segment}>
                          {segmentInfo ? segmentInfo.Name : segment}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="max-h-fit flex flex-col items-center w-full">
                {availableElements.map((element) => (
                  <ListItem key={element.Element}>
                    <div className="basis-10/12">
                      <p> {element.Name} </p>
                    </div>
                    <div className="basis-2/12">
                      <GenericButton onClick={() => handleAddSegment(element)}>
                        Add
                      </GenericButton>
                    </div>
                  </ListItem>
                ))}
              </div>
            </div>
          )}
          {selection === "loop" && (
            <div>
              <p>Loop functionality to be implemented...</p>
            </div>
          )}
        </div>
      </div>
    </FormModal>
  );
}
