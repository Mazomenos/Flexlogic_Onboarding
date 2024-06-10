// Document Item: This component is used to list
// Documents of a partnership, it needs handlers as props, so it
// Remains as a pure Component.

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import React from "react";
import ActionsButton from "@/components/ActionsButton";
import { IoIosSave } from "react-icons/io";

type EDI = {
  IdDoc: number;
  Doc: string;
  isVisible: boolean;
  isRequired: boolean;
};

interface Props {
  key: number;
  document: EDI;
  handleUpdateDocument: (edi: EDI) => void;
  handleDeleteDocument: (id: number) => void;
  handleDeleteButton: (id: number) => void;
  handleEditButton: (id: number) => void;
  realDoc: EDI;
}

export default function DocumentItem({
  document,
  handleUpdateDocument,
  handleDeleteDocument,
  handleEditButton,
  handleDeleteButton,
  realDoc,
}: Props) {
  function handleVisibleClick() {
    handleUpdateDocument({
      ...document,
      isVisible: !document.isVisible,
    });
    console.log(realDoc);
    console.log(document);
  }
  const handleMandatoryClick = () =>
    handleUpdateDocument({
      ...document,
      isRequired: !document.isRequired,
    });

  return (
    <li className="relative bg-base-100 dark:bg-darkMode-base-100 border-base-300 w-[97%] flex  justify-between items-center flex-row place-items-start mx-1 my-2 px-8 shadow-[0px_0px_10px_1px_#00000024] dark:shadow-[0px_0px_10px_1px_#dadee610] border-1 text-xl py-6">
      <div className="flex flex-row w-full items-center">
        <p className="basis-2/6">{document.Doc} </p>
        <div className="basis-1/6 grid justify-items-center">
          <button onClick={() => handleMandatoryClick()}>
            {document.isRequired ? (
              <div
                className="tooltip tooltip-primary"
                data-tip="This document is mandatory"
              >
                <span className="font-bold"> M </span>
              </div>
            ) : (
              <div
                className="tooltip tooltip-primary"
                data-tip="This document is optional"
              >
                <span className="font-bold"> O </span>
              </div>
            )}
          </button>
        </div>
        <div className="basis-1/6 grid justify-items-center content-center">
          <button onClick={() => handleVisibleClick()}>
            {document.isVisible ? (
              <div
                className="tooltip tooltip-primary"
                data-tip="This document is visible"
              >
                <EyeIcon className="size-8" />
              </div>
            ) : (
              <div
                className="tooltip tooltip-primary"
                data-tip="This document is not visible"
              >
                <EyeSlashIcon className="size-8" />
              </div>
            )}
          </button>
        </div>
        <div className="basis-1/6 flex justify-center">
          <ActionsButton
            itemId={document.IdDoc}
            handleDeleteButton={() => handleDeleteButton(document.IdDoc)}
            handleEditButton={handleEditButton}
          />
        </div>
        <div className="basis-1/6 flex justify-center">
          <div
            className={`${
              JSON.stringify(document) == JSON.stringify(realDoc)
                ? "tooltip tooltip-warning"
                : " "
            }`}
            data-tip="Make some changes before saving"
          >
            <button
              disabled={JSON.stringify(document) == JSON.stringify(realDoc)}
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
