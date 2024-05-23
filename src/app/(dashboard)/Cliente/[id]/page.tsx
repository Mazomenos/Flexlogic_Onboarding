// page.tsx
"use client";
import AddButton from "@/components/AddButton";
import BrakeRule from "@/components/BrakeRule";
import ListItem from "@/components/ListItem";
import { IoMdDownload } from "react-icons/io";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import Badge from "../components/Badge";
import Errors from "../docs/Errors";
import { useState } from "react";
import { Status } from "../enums/Status";

type EDI = {
  id: number;
  EDIDoc: string;
  mandatory: boolean;
  status: string;
};

export default function Home() {
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const edi: EDI[] = [
    { id: 1, EDIDoc: "EDI 850 Purchase Order", mandatory: true, status: "Validate" },
    { id: 2, EDIDoc: "EDI 860 Purchase Order Change Request ", mandatory: false, status: "Validate" },
    { id: 3, EDIDoc: "EDI 855 Purchase Order Acknowledgment", mandatory: true, status: "Complete" },
    { id: 4, EDIDoc: "EDI 856 Ship Notice/Manifest", mandatory: true, status: "Validate" },
    { id: 5, EDIDoc: "EDI 820 Payment Order/Remittance Advice", mandatory: false, status: "Failed" },
  ];

  const downloadPOTest = () => {
    console.log("Descargado");
  };

  const openError = (con: boolean) => {
    setIsErrorModalOpen(con);
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-end">
        <AddButton onClick={() => downloadPOTest()}>
          {" "}
          Download PO Test <IoMdDownload />{" "}
        </AddButton>
      </div>
      <BrakeRule />
      <div className="max-h-full flex flex-col items-center w-full overflow-y-auto overscroll-none">
        {edi.map((partnership, index) => (
          <ListItem key={index} path={partnership.status == Status.FAILED ? partnership.EDIDoc : ""} onClick={() => openError(true)} >
            <div className="flex flex-row w-full">
              <p className="basis-2/5">{partnership.EDIDoc} </p>
              <TfiLayoutLineSolid
                style={{ transform: "rotate(90deg)" }}
                className="grid content-center h-full"
                size={32}
              />
              <p className="basis-2/5">
                {partnership.mandatory ? "Mandatory" : "Optional"}{" "}
              </p>
              <div className="basis-1/5 flex justify-end">
                <Badge status={partnership.status} />
              </div>
            </div>
          </ListItem>
        ))}
      </div>
      <Errors isOpen={isErrorModalOpen} setIsOpen={setIsErrorModalOpen} />
    </div>
  );
}
