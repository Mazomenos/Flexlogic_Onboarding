// page.tsx
"use client";
import AddButton from "@/components/AddButton";
import BrakeRule from "@/components/BrakeRule";
import ListItem from "@/components/ListItem";
import { IoMdDownload } from "react-icons/io";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import Badge from "../components/Badge";
import Errors from "../docs/Errors";
import { useState } from "react";
import { Status } from "../enums/Status";
import ValidateButton from "../components/ValidateButton";
import BackButton from "@/components/BackButton";
import { useRouter } from "next/navigation";
import ListHeader from "@/components/ListHeader";

type EDI = {
  id: number;
  EDIDoc: string;
  mandatory: boolean;
  status: string;
};

export default function Home() {
  const router = useRouter();

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const edi: EDI[] = [
    {
      id: 1,
      EDIDoc: "EDI 850 Purchase Order",
      mandatory: true,
      status: "Pending",
    },
    {
      id: 2,
      EDIDoc: "EDI 860 Purchase Order Change Request ",
      mandatory: false,
      status: "Pending",
    },
    {
      id: 3,
      EDIDoc: "EDI 855 Purchase Order Acknowledgment",
      mandatory: true,
      status: "Complete",
    },
    {
      id: 4,
      EDIDoc: "EDI 856 Ship Notice/Manifest",
      mandatory: true,
      status: "Pending",
    },
    {
      id: 5,
      EDIDoc: "EDI 820 Payment Order/Remittance Advice",
      mandatory: false,
      status: "Failed",
    },
  ];

  const downloadPOTest = () => {
    console.log("Descargado");
  };

  const openError = (con: boolean) => {
    setIsErrorModalOpen(con);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="relative flex justify-center md:justify-end">
        <div className="absolute top-1 left-0">
          <BackButton
            onClick={() => {
              router.back();
            }}
          />
        </div>
        <AddButton onClick={() => downloadPOTest()}>
          Download PO Test <IoMdDownload />
        </AddButton>
      </div>
      <BrakeRule />
      <div className="max-h-full flex flex-col items-center w-full overflow-y-auto overscroll-none">
        <ListHeader>
          <div className="flex flex-row w-full items-center">
            <p className="basis-2/6">Document</p>
            <p className="basis-1/6 flex justify-center ">Mandatory</p>
            <p className="basis-1/6 flex justify-center ">Download</p>
            <p className="basis-1/6 flex justify-center ">Status</p>
            <p className="basis-1/6 flex justify-center ">Actions</p>
          </div>
        </ListHeader>
        {edi.map((partnership, index) => (
          <ListItem key={index}>
            <div className="flex flex-row w-full items-center">
              <p className="basis-2/6 ">{partnership.EDIDoc} </p>
              <p className="basis-1/6 flex justify-center ">
                {partnership.mandatory ? "Mandatory" : "Optional"}{" "}
              </p>
              <div className="basis-1/6 flex justify-center">
                <DocumentArrowDownIcon className="h-6 w-6" />
              </div>
              <div className="basis-1/6 flex justify-center">
                <Badge status={partnership.status} />
              </div>
              <div className="basis-1/6 flex justify-center">
                {partnership.status !== Status.FAILED ? (
                  partnership.status == Status.PENDING ? (
                    <button
                      className="w-28 p-1 text-base dark:disabled:ring-darkMode-primary/30 bg-info disabled:bg-info/50 disabled:text-info-content/30 dark:bg-darkMode-primary dark:disabled:bg-darkMode-primary/30 dark:hover:enabled:bg-transparent  dark:text-darkMode-base-100 dark:disabled:text-darkMode-info-content/50 dark:hover:enabled:text-darkMode-primary font-bold text-info-content transition motion-reduce:transition-none motion-reduce:hover:transform-none hover:enabled:bg-transparent hover:enabled:text-brand-blue ring-2 ring-primary disabled:ring-primary/50 hover:enabled:ring-primary dark:ring-darkMode-primary hover:border-1"
                      disabled={false}
                    >
                      <div className=""> Validate </div>
                    </button>
                  ) : (
                    <div
                      className="tooltip tooltip-warning"
                      data-tip="Document has already been validated "
                    >
                      <button
                        className="w-28 p-1 text-base dark:disabled:ring-darkMode-primary/30 bg-info disabled:bg-info/50 disabled:text-info-content/30 dark:bg-darkMode-primary dark:disabled:bg-darkMode-primary/30 dark:hover:enabled:bg-transparent  dark:text-darkMode-base-100 dark:disabled:text-darkMode-info-content/50 dark:hover:enabled:text-darkMode-primary font-bold text-info-content transition motion-reduce:transition-none motion-reduce:hover:transform-none hover:enabled:bg-transparent hover:enabled:text-brand-blue ring-2 ring-primary disabled:ring-primary/50 hover:enabled:ring-primary dark:ring-darkMode-primary hover:border-1"
                        disabled={true}
                      >
                        <div className=""> Validate </div>
                      </button>
                    </div>
                  )
                ) : (
                  <button
                    onClick={() => openError(true)}
                    className="w-28 p-1 text-base bg-error dark:bg-darkMode-error-content dark:hover:bg-transparent dark:text-darkMode-base-100 dark:hover:text-darkMode-error-content font-bold text-error-content transition motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-transparent hover:text-error-content ring-2 ring-error hover:ring-error dark:ring-darkMode-error-content hover:border-1"
                  >
                    Error Log
                  </button>
                )}
              </div>
            </div>
          </ListItem>
        ))}
      </div>
      <Errors isOpen={isErrorModalOpen} setIsOpen={setIsErrorModalOpen} />
    </div>
  );
}
