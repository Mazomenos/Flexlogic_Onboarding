import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";

export default function SidebarItem({ children }: { children?: ReactNode }) {
  return (
    <Accordion
      type="single"
      collapsible
      className=" my-2 text-lg border-2 border-base-300 max-w-full dark:shadow-[0px_0px_10px_1px_#dadee610] w-full collapse bg-base-100 pb-0 mb-0 dark:bg-darkMode-base-100 hover:bg-base-200 dark:hover:bg-darkMode-base-200 transition motion-reduce:transition-none motion-reduce:hover:transform-none rounded-none "
    >
      <AccordionItem value="item-1" className="pb-0 w-full">
        <AccordionTrigger>
          <div className="px-2 flex w-full">
            <div className="basis-1/12 w-full"> ST </div>
            <div className="basis-7/12 overflow-hidden text-ellipsis text-left whitespace-nowrap w-full">
              Transaction set header number
            </div>
            <div className="basis-4/12 w-full"> Mandatory </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pb-0">
          <Accordion
            type="single"
            collapsible
            className="w-full collapse bg-base-200   dark:bg-darkMode-base-100 hover:bg-base-200 dark:hover:bg-darkMode-base-200 transition motion-reduce:transition-none motion-reduce:hover:transform-none rounded-none"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">
                <div className="px-2 flex w-full">
                  <div className="basis-1/12 w-full"> ST-02 </div>
                  <div className="basis-7/12 overflow-hidden text-ellipsis text-left whitespace-nowrap">
                    Transaction set control number
                  </div>
                  <div className="basis-1/12"> M </div>
                  <div className="basis-1/12"> 3 </div>
                  <div className="basis-1/12"> 3 </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex mt-2 justify-center">
                <div className="p-2 bg-base-100 dark:bg-darkMode-base-100 hover:bg-base-200 dark:hover:bg-darkMode-base-200 border-base-300 w-[95%] shadow-[0px_0px_10px_1px_#00000024] dark:shadow-[0px_0px_10px_1px_#dadee610] border-1 transition motion-reduce:transition-none motion-reduce:hover:transform-none">
                  <p className="text-lg">Is it accessible?</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
