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
import { ReactNode, useState } from "react";
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import AddButton from "@/components/AddButton";
import SegmentModal from "./SegmentModal";
import { EDISegment, EDITPDocument } from "../../../../../../prisma/interfaces/EDIInterfaces";
import { EDITPDocs } from "../../../../../../prisma/EDITPDocs";

function renderElements(elements) {
    return elements.map((element) => (
        <Accordion
            key={element.Position}
            type="single"
            collapsible
            className="w-full collapse bg-base-200 dark:bg-darkMode-base-100 hover:bg-base-200 dark:hover:bg-darkMode-base-200 transition motion-reduce:transition-none motion-reduce:hover:transform-none rounded-none"
        >
            <AccordionItem value={`item-${element.Position}`}>
                <AccordionTrigger className="text-md">
                    <div className="px-2 flex w-full">
                        <div className="basis-2/12 flex-shrink-0 w-full">{element.Position}</div>
                        <div className="basis-5/12 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap flex self-center">
                            {element.Element}
                        </div>
                        <div className="basis-1/12 flex-shrink-0 flex justify-center self-center">
                            {element.Requirement}
                        </div>
                        <div className="basis-1/12 flex-shrink-0 flex justify-center self-center">
                            {element.Min}
                        </div>
                        <div className="basis-1/12 flex-shrink-0 flex justify-center self-center">
                            {element.Max}
                        </div>
                        <div className="basis-1/12 flex-shrink-0 flex justify-center self-center">
                            <MinusCircleIcon
                                className={`h-6 w-6 ${element.Requirement === "M"
                                        ? "text-gray-300"
                                        : "text-darkMode-error-content"
                                    }`}
                            />
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
    ));
}

function renderSegments(segments) {
    return segments.map((segment) => (
        <Accordion
            key={segment.Position}
            type="single"
            collapsible
            className="my-5 shadow-custom max-w-full w-full collapse bg-base-100 dark:bg-darkMode-base-100 hover:bg-base-200 dark:hover:bg-darkMode-base-200 transition motion-reduce:transition-none motion-reduce:hover:transform-none rounded-none"
        >
            <AccordionItem value={`item-${segment.Position}`} className="pb-0 w-full">
                <AccordionTrigger className="text-lg">
                    <div className="px-2 flex w-full">
                        <div className="basis-6/12 flex-shrink-0 w-full flex justify-start self-center ">
                            {segment.Segment}
                        </div>
                        <div className="basis-4/12 flex-shrink-0 w-full flex justify-center self-center text-center">
                            {segment.Requirement === "M" ? "Mandatory" : "Optional"}
                        </div>
                        <div className="basis-1/12 flex-shrink-0 flex justify-center self-center">
                            <MinusCircleIcon
                                className={`h-7 w-7 ${segment.Requirement === "M"
                                        ? "text-gray-300"
                                        : "text-darkMode-error-content cursor-pointer"
                                    }`}
                            />
                        </div>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                    {segment.Elements ? renderElements(segment.Elements) : null}
                    {segment.Segments ? renderSegments(segment.Segments) : null}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ));
}

export default function SidebarItem() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <div className="flex justify-end">
                <AddButton> Add Segment </AddButton>
            </div>

            <div className="my-5">
                {EDITPDocs[0].Segments.map((segment) => (
                    <div key={segment.Position}>
                        {renderSegments([segment])}
                    </div>
                ))}
            </div>
        </div>
    );
}
