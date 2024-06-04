// Partner Item: This component is used to list
// A partner it needs handlers as props, so it
// Remains as a pure Component.

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import React from "react";
import ActionsButton from "./ActionsButton";
import { IoIosSave } from "react-icons/io";

type Partner = {
  id: number;
  companyName: string;
  ediDoc: string[];
  visible: boolean;
};

interface Props {
  partner: Partner;
  handleUpdatePartner: (partner: Partner) => void;
  handleDeletePartner: (id: number) => void;
  handleDeleteButton: (id: number) => void;
  handleEditButton: (id: number) => void;
  realPartner: Partner;
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
    handleUpdatePartner({
      ...partner,
      visible: !partner.visible,
    });
    console.log(realPartner);
    console.log(partner);
  }
  return (
    <li className="relative bg-base-100 dark:bg-darkMode-base-100 border-base-300 w-[97%] flex  justify-between items-center flex-row place-items-start mx-1 my-2 px-8 shadow-[0px_0px_10px_1px_#00000024] dark:shadow-[0px_0px_10px_1px_#dadee610] border-1 text-xl py-6">
      <div className="flex flex-row w-full items-center">
        <p className="basis-3/6">{partner.companyName} </p>
        <div className="basis-1/6 grid justify-items-center content-center">
          <button onClick={() => handleVisibleClick()}>
            {partner.visible ? (
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
        <div className="basis-1/6 flex justify-center">
          <div
            className={`${
              JSON.stringify(partner) == JSON.stringify(realPartner)
                ? "tooltip tooltip-warning"
                : " "
            }`}
            data-tip="Make some changes before saving"
          >
            <button
              disabled={JSON.stringify(partner) == JSON.stringify(realPartner)}
              className="bg-info dark:bg-darkMode-info ring-1 border-info-content dark:ring-darkMode-info-content text-info-content dark:text-darkMode-info-content disabled:bg-transparent dark:disabled:bg-darkMode-base-100 disabled:ring-base-300 dark:disabled:ring-darkMode-base-300 disabled:text-base-300 dark:disabled:text-darkMode-foreground/20 rounded p-2"
            >
              <IoIosSave />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
