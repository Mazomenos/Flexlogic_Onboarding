import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReactNode } from "react";
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import { EDITemplateDocs } from "../../../../../../prisma/EDITemplateDocs";
import { EDIElements } from "../../../../../../prisma/EDIElements";
import { EDISegments } from "../../../../../../prisma/EDISegments";
import ConditionSelector from "./ConditionSelector";
import SegmentModal from "./../SegmentModal";
import AddButton from "@/components/AddButton";
import { EDISegment } from "../../../../../../prisma/interfaces/EDIInterfaces";

export default function SidebarItem({ children }: { children?: ReactNode }) {
  const [conditionSelections, setConditionSelections] = useState<{
    [key: string]: string;
  }>({});

  const handleSelectionChange = (key: string, value: string) => {
    setConditionSelections((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [segments, setSegments] = useState(
    EDITemplateDocs[0].Segments.filter(
      (templateSegment) => templateSegment.Requirement === "M",
    ),
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addSegment = (newSegment: EDISegment) => {
    const updatedSegments = [...segments, newSegment];
    setSegments(updatedSegments);
    closeModal();
  };

  const removeSegment = (segmentToRemove: string) => {
    const updatedSegments = segments.filter(
      (segment) => segment.Segment !== segmentToRemove,
    );
    setSegments(updatedSegments);
  };

  const usedSegments = segments.map(
    (templateSegment) => templateSegment.Segment,
  );

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-end">
        <AddButton onClick={openModal}> Add Segment </AddButton>
      </div>
      <div className="my-5 no-scrollbar flex-1 overflow-y-auto overscroll-none">
        {segments.map((templateSegment) => {
          const matchingSegment = EDISegments.find(
            (segment) => segment.Segment === templateSegment.Segment,
          );
          if (!matchingSegment) return null;

          return (
            <div key={templateSegment.Position} className="flex justify-center">
              <Accordion
                key={templateSegment.Position}
                type="single"
                collapsible
                className="w-[98%] mb-3 mt-2 shadow-custom  collapse bg-base-100 pb-0 dark:bg-darkMode-base-100 hover:bg-base-200 dark:hover:bg-darkMode-base-200 transition motion-reduce:transition-none motion-reduce:hover:transform-none rounded-none"
              >
                <AccordionItem
                  value={`item-${templateSegment.Position}`}
                  className="pb-0 w-full"
                >
                  <AccordionTrigger className="text-lg">
                    <div className="px-2 flex w-full">
                      <div className="basis-1/12 flex-shrink-0 w-full flex justify-center self-center ">
                        {templateSegment.Segment}
                      </div>
                      <span className="flex-shrink flex self-center basis-7/12 overflow-hidden text-ellipsis whitespace-nowrap">
                        {matchingSegment.Name}
                      </span>
                      <div className="basis-3/12 flex-shrink-0 w-full flex justify-center self-center text-center">
                        {templateSegment.Requirement === "M"
                          ? "Mandatory"
                          : "Optional"}
                      </div>
                      <div className="basis-1/12 flex-shrink-0 flex justify-center self-center">
                        <MinusCircleIcon
                          className={`h-7 w-7 ${
                            templateSegment.Requirement === "M"
                              ? "text-gray-300"
                              : "text-darkMode-error-content cursor-pointer"
                          }`}
                          onClick={() => {
                            if (templateSegment.Requirement !== "M") {
                              removeSegment(templateSegment.Segment);
                            }
                          }}
                        />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-0">
                    {matchingSegment.Elements.map((element, index) => {
                      const matchingElement = EDIElements.find(
                        (e) => e.Element === element.Element,
                      );
                      if (!matchingElement) return null;

                      return (
                        <Accordion
                          key={element.Position}
                          type="single"
                          collapsible
                          className="w-full collapse bg-base-200 dark:bg-darkMode-base-100 hover:bg-base-200 dark:hover:bg-darkMode-base-200 transition motion-reduce:transition-none motion-reduce:hover:transform-none rounded-none"
                        >
                          <AccordionItem value={`item-${element.Position}`}>
                            <AccordionTrigger className="text-md">
                              <div className="px-2 flex w-full">
                                <div className="basis-2/12 flex-shrink-0 w-full">
                                  {element.Position}
                                </div>
                                <div className="basis-5/12 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap flex self-center">
                                  {matchingElement.Name}
                                </div>
                                <div className="basis-1/12 flex-shrink-0 flex justify-center self-center">
                                  {element.Requirement}
                                </div>
                                <div className="basis-1/12 flex-shrink-0 flex justify-center self-center">
                                  {matchingElement.Min}
                                </div>
                                <div className="basis-1/12 flex-shrink-0 flex justify-center self-center">
                                  {matchingElement.Max}
                                </div>
                                <div className="basis-1/12 flex-shrink-0 flex justify-center self-center">
                                  <MinusCircleIcon
                                    className={`h-6 w-6 ${
                                      element.Requirement === "M"
                                        ? "text-gray-300"
                                        : "text-darkMode-error-content"
                                    }`}
                                  />
                                </div>
                              </div>
                            </AccordionTrigger>

                            <AccordionContent className="flex mt-2 justify-center">
                              <ConditionSelector
                                index={index}
                                selection={
                                  conditionSelections[
                                    `element-${element.Position}`
                                  ] || ""
                                }
                                onSelectionChange={(value) =>
                                  handleSelectionChange(
                                    `element-${element.Position}`,
                                    value,
                                  )
                                }
                              />
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      );
                    })}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          );
        })}
      </div>
      <SegmentModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        usedSegments={usedSegments}
        addSegment={addSegment}
      />
    </div>
  );
}
