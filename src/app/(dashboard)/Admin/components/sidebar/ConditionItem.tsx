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
import { Input } from "@/components/ui/input";

type Props = {
  conditionType: string;
  index: number;
};

export default function ConditionItem({ conditionType, index }: Props) {
  switch (conditionType) {
    case Conditions.CHARACTER_LENGTH:
      return (
        <div className="self-start flex flex-row w-full place-items-center">
          <p className=" basis-2/12 text-right pr-2">Length</p>
          <div className="basis-10/12 w-full ">
            <Input
              key={index}
              className="border-base-300"
              type="number"
              placeholder="input a number"
            />
          </div>
        </div>
      );
    case Conditions.DECIMAL_POSITION:
      return (
        <div className="self-start flex flex-row w-full place-items-center">
          <p className=" basis-2/12 text-right pr-2">Decimals</p>
          <div className="basis-10/12 w-full ">
            <Input
              className="border-base-300"
              type="number"
              placeholder="input a number"
            />
          </div>
        </div>
      );
    case Conditions.ID_CODES:
      return (
        <div className="self-start flex flex-row w-full place-items-center">
          <p className=" basis-2/12 text-right pr-2">ID Codes</p>
          <div className="basis-10/12 w-full ">
            <Input
              className="border-base-300"
              placeholder="input a comma separated list"
            />
          </div>
        </div>
      );
    case Conditions.DATE_FORMAT:
      return (
        <div className="self-start flex flex-row w-full place-items-center">
          <p className=" basis-2/12 text-right pr-2">Decimals</p>

          <div className="basis-10/12 w-full ">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Format" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Date Formats</SelectLabel>
                  <SelectItem value="YYMMDD">YY/MM/DD</SelectItem>
                  <SelectItem value="CCYYMMDD">CCYY/MM/DD</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      );

    case Conditions.TIME_FORMAT:
      return (
        <div className="self-start flex flex-row w-full place-items-center">
          <p className=" basis-2/12 text-right pr-2">Decimals</p>

          <div className="basis-10/12 w-full ">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Format" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Time Formats</SelectLabel>
                  <SelectItem value="HHMM">HH:MM</SelectItem>
                  <SelectItem value="HHMMSS">HH:MM:SS</SelectItem>
                  <SelectItem value="HHMMSSMM">HH:MM:SS:DD</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      );

    case "test_2":
      return <p> adios! </p>;
  }
}
