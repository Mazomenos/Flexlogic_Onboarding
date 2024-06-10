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
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import { EDITemplateDocs } from "../../../../../../prisma/EDITemplateDocs";
import { EDIElements } from "../../../../../../prisma/EDIElements";
import { EDISegments } from "../../../../../../prisma/EDISegments";
import ConditionSelector from "./ConditionSelector";

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

  return (
    <div className="my-5">
      {EDITemplateDocs[0].Segments.filter(
        (templateSegment) => templateSegment.Requirement === "M",
      ).map((templateSegment) => {
        const matchingSegment = EDISegments.find(
          (segment) => segment.Segment === templateSegment.Segment,
        );
        if (!matchingSegment) return null;

        return (
          <Accordion
            key={templateSegment.Position}
            type="single"
            collapsible
            className="mb-5 shadow-custom max-w-full w-full collapse bg-base-100 pb-0 dark:bg-darkMode-base-100 hover:bg-base-200 dark:hover:bg-darkMode-base-200 transition motion-reduce:transition-none motion-reduce:hover:transform-none rounded-none"
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
                  <div className="basis-7/12 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap w-full flex self-center text-center">
                    {matchingSegment.Name}
                  </div>
                  <div className="basis-3/12 flex-shrink-0 w-full flex justify-center self-center text-center">
                    {templateSegment.Requirement === "M"
                      ? "Mandatory"
                      : "Optional"}
                  </div>
                  <div className="basis-1/12 flex-shrink-0 flex justify-center self-center">
                    <MinusCircleIcon
                      className={`h-7 w-7 ${templateSegment.Requirement === "M" ? "text-gray-300" : "text-darkMode-error-content"}`}
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
                                className={`h-6 w-6 ${element.Requirement === "M" ? "text-gray-300" : "text-darkMode-error-content"}`}
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
        );
      })}
    </div>
  );
}
