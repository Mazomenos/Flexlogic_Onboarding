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
import { EDITemplateDocument } from "../../../../../prisma/interfaces/EDIInterfaces";
import { EDIElement } from "../../../../../prisma/interfaces/EDIInterfaces";
import { EDISegment } from "../../../../../prisma/interfaces/EDIInterfaces";

export default function SidebarItem({ children }: { children?: ReactNode }) {

  const EDITemplateDocs: EDITemplateDocument[] = [
    {
      Doc: 850,
      Version: "X12 4010",
      Segments: [
        {
          Position: 1,
          Segment: "ST",
          Requirement: "M",
          Max: "1"
        },
        {
          Position: 2,
          Segment: "BEG",
          Requirement: "M",
          Max: "1"
        },
      ],
    }
  ];

  const EDISegments: EDISegment[] = [
    {
      Segment: "ST",
      Name: "Transaction Set Header",
      Version: "X12 4010",
      Elements: [
        {
          Position: "ST-01",
          Element: "143",
          Requirement: "M",
        },
        {
          Position: "ST-02",
          Element: "329",
          Requirement: "M",
        },
      ],
    },
    {
      Segment: "BEG",
      Name: "Beginning Segment for Purchase Order",
      Version: "X12 4010",
      Elements: [
        {
          Position: "BEG-01",
          Element: "353",
          Requirement: "M",
        },
        {
          Position: "BEG-02",
          Element: "92",
          Requirement: "M",
        },
        {
          Position: "BEG-03",
          Element: "324",
          Requirement: "M",
        },
        {
          Position: "BEG-04",
          Element: "328",
          Requirement: "OP",
        },
      ],
    },
  ];

  const EDIElements: EDIElement[] = [
    {
      Element: "92",
      Name: "Purchase Order Type Code",
      Type: "ID",
      Min: 2,
      Max: 2,
      Version: "X12 4010"
    },
    {
      Element: "143",
      Name: "Transaction Set Identifier Code",
      Type: "ID",
      Min: 3,
      Max: 3,
      Version: "X12 4010"
    },
    {
      Element: "324",
      Name: "Purchase Order Number",
      Type: "AN",
      Min: 1,
      Max: 22,
      Version: "X12 4010"
    },
    {
      Element: "328",
      Name: "Release Number",
      Type: "AN",
      Min: 1,
      Max: 30,
      Version: "X12 4010"
    },
    {
      Element: "329",
      Name: "Transaction Set Control Number",
      Type: "AN",
      Min: 4,
      Max: 9,
      Version: "X12 4010"
    },
    {
      Element: "353",
      Name: "Transaction Set Purpose Code",
      Type: "ID",
      Min: 2,
      Max: 2,
      Version: "X12 4010"
    },
  ];

  return (
    <div className="my-5">
      {EDITemplateDocs[0].Segments.map((templateSegment) => {
        const matchingSegment = EDISegments.find(segment => segment.Segment === templateSegment.Segment);
        if (!matchingSegment) return null;

        return (
          <Accordion
            key={templateSegment.Position}
            type="single"
            collapsible
            className="mb-5 shadow-md max-w-full w-full collapse bg-base-100 pb-0 dark:bg-darkMode-base-100 hover:bg-base-200 dark:hover:bg-darkMode-base-200 transition motion-reduce:transition-none motion-reduce:hover:transform-none rounded-none"
          >
            <AccordionItem value={`item-${templateSegment.Position}`} className="pb-0 w-full">
              <AccordionTrigger>
                <div className="px-2 flex w-full">
                  <div className="basis-1/12 w-full flex justify-center self-center">{templateSegment.Segment}</div>
                  <div className="basis-6/12 overflow-hidden text-ellipsis text-left whitespace-nowrap w-full flex self-center">
                    {matchingSegment.Name}
                  </div>
                  <div className="basis-4/12 w-full flex justify-center self-center">
                    {templateSegment.Requirement === "M" ? "Mandatory" : "Optional"}
                  </div>
                  <div className="basis-1/12 flex justify-center self-center">
                    <MinusCircleIcon className="h-7 w-7 text-darkMode-error-content" />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-0">
                {matchingSegment.Elements.map((element) => {
                  const matchingElement = EDIElements.find(e => e.Element === element.Element);
                  if (!matchingElement) return null;

                  return (
                    <Accordion
                      key={element.Position}
                      type="single"
                      collapsible
                      className="w-full collapse bg-base-200 dark:bg-darkMode-base-100 hover:bg-base-200 dark:hover:bg-darkMode-base-200 transition motion-reduce:transition-none motion-reduce:hover:transform-none rounded-none"
                    >
                      <AccordionItem value={`item-${element.Position}`}>
                        <AccordionTrigger className="text-lg">
                          <div className="px-2 flex w-full">
                            <div className="basis-2/12 w-full">{element.Position}</div>
                            <div className="basis-5/12 overflow-hidden text-ellipsis text-left whitespace-nowrap flex self-center">
                              {matchingElement.Name}
                            </div>
                            <div className="basis-1/12 flex justify-center self-center">{element.Requirement}</div>
                            <div className="basis-1/12 flex justify-center self-center">{matchingElement.Min}</div>
                            <div className="basis-1/12 flex justify-center self-center">{matchingElement.Max}</div>
                            <div className="basis-1/12 flex justify-center self-center">
                              <MinusCircleIcon className="h-6 w-6 text-darkMode-error-content" />
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="flex mt-2 justify-center">
                          <div className="p-2 bg-base-100 flex items-center dark:bg-darkMode-base-100 hover:bg-base-200 dark:hover:bg-darkMode-base-200 border-base-300 w-[95%] shadow-md border-1 transition motion-reduce:transition-none motion-reduce:hover:transform-none">
                            <p className="text-lg basis-3/12">Conditional</p>
                            <div className="basis-7/12 self-start">
                              <Select>
                                <SelectTrigger className="w-[180px]">
                                  <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
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
