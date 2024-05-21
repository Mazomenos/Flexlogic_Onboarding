"use client";

import { DialogTitle, Description } from "@headlessui/react";

import Modal from "../components/Modal";
import React from "react";
import CancelButton from "@/components/CancelButton";
import ListItem from "@/components/ListItem";
import GenericButton from "@/components/GenericButton";
import BrakeRule from "@/components/BrakeRule";

type Edi = {
  id: number;
  EDIDoc: string;
  mandatory: boolean;
  status: string;
};

type Partnership = {
  id: number;
  name: string;
  status: string;
  edi: Edi[];
};

export default function Home() {
  const partnerships: Partnership[] = [
    {
      id: 1,
      name: "Amazon",
      status: "Complete",
      edi: [
        { id: 1, EDIDoc: "EDI 850 Purchase Order", mandatory: true, status: "Validate" },
        { id: 2, EDIDoc: "EDI 860 Purchase Order Change Request", mandatory: false, status: "Validate" },
        { id: 3, EDIDoc: "EDI 855 Purchase Order Acknowledgment", mandatory: true, status: "Complete" },
        { id: 4, EDIDoc: "EDI 856 Ship Notice/Manifest", mandatory: true, status: "Validate" },
        { id: 5, EDIDoc: "EDI 820 Payment Order/Remittance Advice", mandatory: false, status: "Failed" },
      ],
    },
    {
      id: 2,
      name: "Walmart",
      status: "In Process",
      edi: [
        { id: 1, EDIDoc: "EDI 850 Purchase Order", mandatory: true, status: "Validate" },
        { id: 2, EDIDoc: "EDI 860 Purchase Order Change Request", mandatory: false, status: "Validate" },
        { id: 3, EDIDoc: "EDI 855 Purchase Order Acknowledgment", mandatory: true, status: "Complete" },
        { id: 4, EDIDoc: "EDI 856 Ship Notice/Manifest", mandatory: true, status: "Validate" },
        { id: 5, EDIDoc: "EDI 820 Payment Order/Remittance Advice", mandatory: false, status: "Failed" },
      ],
    },
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const [isModal2, setIsModal2] = React.useState(false);
  const [selectedPartnershipId, setSelectedPartnershipId] = React.useState<number | null>(null);

  const handleViewClick = (id: number) => {
    setSelectedPartnershipId(id);
    setIsOpen(false);
    setIsModal2(true);
  };

  const selectedPartnership = partnerships.find(partnership => partnership.id === selectedPartnershipId);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open dialog</button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="max-h-full flex flex-col items-center w-full overflow-y-auto overscroll-none">
          {partnerships.map((partnership) => (
            <ListItem key={partnership.id} path={partnership.name}>
              <p> {partnership.name} Connection </p>
              <GenericButton onClick={() => handleViewClick(partnership.id)}>
                View
              </GenericButton>
            </ListItem>
          ))}
        </div>
        <CancelButton onClick={() => setIsOpen(false)} />
      </Modal>
      <Modal isOpen={isModal2} setIsOpen={setIsModal2}>
        <DialogTitle className="text-2xl"> {selectedPartnership?.name} Partnership EDI Verification </DialogTitle>
        <BrakeRule/>
        <div className="max-h-full flex flex-col items-center w-full overflow-y-auto overscroll-none">
          {selectedPartnership && selectedPartnership.edi.map((edi) => (
            <ListItem key={edi.id} path={edi.EDIDoc}>
              <p> {edi.EDIDoc} </p>
              <Description> {edi.mandatory ? "Mandatory" : "Optional"} </Description>
            </ListItem>
          ))}
        </div>
        <div className="flex w-full justify-end">
          <div className="w-full flex justify-end mr-2">
          <CancelButton onClick={() => setIsModal2(false)} />
          </div>
          
          <GenericButton onClick={() => setIsModal2(false)}> Create </GenericButton>
        </div>
      </Modal>
    </>
  );
}
