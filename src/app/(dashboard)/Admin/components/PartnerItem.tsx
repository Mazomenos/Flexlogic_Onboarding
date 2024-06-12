import ActionsButton from "@/components/ActionsButton";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import React from "react";
import { IoIosSave } from "react-icons/io";
import { TradingPartnerCard } from "../page";
import { UpdateTradingPartner } from "@/DA/tradingPartnerControllers";
import { SuccessAction } from "@/components/toasters";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  partner: TradingPartnerCard;
  handleUpdatePartner: (partner: TradingPartnerCard, type: string) => void;
  handleDeletePartner: (id: string) => void;
  handleDeleteButton: (id: string) => void;
  handleEditButton: (id: string) => void;
  realPartner: TradingPartnerCard;
}

async function UpdateTPVisible(
  id: string,
  data: {
    Name?: string;
    Initial850EDI?: string;
    Delimiters?: string[];
    Version?: string;
    EOL?: string;
    isVisible?: boolean;
  },
) {
  try {
    const response = await UpdateTradingPartner(id, data);

    if (response) {
      const data = await response;
      console.log(data);
      if (data) console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}

export default function PartnerItem({
  partner,
  handleUpdatePartner,
  handleDeletePartner,
  handleEditButton,
  handleDeleteButton,
  realPartner,
}: Props) {
  function handleVisibleClick() {
    UpdateTPVisible(partner.id, { isVisible: !partner.isVisible });
    handleUpdatePartner(
      {
        ...partner,
        isVisible: !partner.isVisible,
      },
      "visible",
    );
  }

  return (
    <li className="relative bg-base-100 dark:bg-darkMode-base-100 border-base-300 w-[97%] flex justify-between items-center flex-row place-items-start mx-1 my-2 px-8 shadow-[0px_0px_10px_1px_#00000024] dark:shadow-[0px_0px_10px_1px_#dadee610] border-1 text-xl py-6">
      <div className="flex flex-row w-full items-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="basis-3/6 overflow-hidden text-ellipsis text-left whitespace-nowrap">
                {partner.Name.split("_").join(" ")}
              </p>
            </TooltipTrigger>
            <TooltipContent side="top" align="start" className="max-w-xs">
              <span className="whitespace-normal break-words">
                {partner.Name.split("_").join(" ")}
              </span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="basis-2/6 grid justify-items-center content-center">
          <button onClick={() => handleVisibleClick()}>
            {partner.isVisible ? (
              <div
                className="tooltip tooltip-primary"
                data-tip="This partner is visible"
              >
                <EyeIcon className="size-8" />
              </div>
            ) : (
              <div
                className="tooltip tooltip-primary"
                data-tip="This partner is not visible"
              >
                <EyeSlashIcon className="size-8" />
              </div>
            )}
          </button>
        </div>
        <div className="basis-1/6 flex justify-center">
          <ActionsButton
            itemId={partner.id}
            handleDeleteButton={() => handleDeleteButton(partner.id)}
            handleEditButton={handleEditButton}
          />
        </div>
      </div>
    </li>
  );
}
