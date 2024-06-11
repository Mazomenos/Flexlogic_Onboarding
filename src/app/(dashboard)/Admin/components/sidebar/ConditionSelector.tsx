import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Conditions } from "../../enums/Conditions";
import BrakeRule from "@/components/BrakeRule";
import React from "react";
import ConditionItem from "./ConditionItem";

type ConditionSelectorProps = {
  index: number;
  selection: string;
  onSelectionChange: (value: string) => void;
};

export default function ConditionSelector({
  index,
  selection,
  onSelectionChange,
}: ConditionSelectorProps) {
  return (
    <div className="p-2 bg-base-100 flex flex-col items-center dark:bg-darkMode-base-100 hover:bg-base-200 dark:hover:bg-darkMode-base-200 border-base-300 w-[95%] shadow-md border-1 transition motion-reduce:transition-none motion-reduce:hover:transform-none">
      <div className="basis-7/12 self-start flex flex-row w-full place-items-center">
        <p className="font-bold  basis-2/12 text-right mr-2">Conditional</p>
        <div className="basis-10/12 w-full ">
          <Select
            value={selection}
            onValueChange={(value) => onSelectionChange(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a conditional" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Conditionals</SelectLabel>
                <SelectItem value={Conditions.CHARACTER_LENGTH}>
                  Character Length
                </SelectItem>
                <SelectItem value={Conditions.DECIMAL_POSITION}>
                  Decimal Position
                </SelectItem>
                <SelectItem value={Conditions.ID_CODES}>ID Codes</SelectItem>
                <SelectItem value={Conditions.DATE_FORMAT}>
                  Date Format
                </SelectItem>
                <SelectItem value={Conditions.TIME_FORMAT}>
                  Time Format
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-[90%]">
        <ConditionItem index={index} conditionType={selection} />
      </div>
    </div>
  );
}
