"use client";

import { DialogTitle, Description } from "@headlessui/react";
import Modal from "@/components/Modal";
import React from "react";
import CancelButton from "@/components/CancelButton";
import ListItem from "@/components/ListItem";
import GenericButton from "@/components/GenericButton";
import BrakeRule from "@/components/BrakeRule";
import BackButton from "@/components/BackButton";
import AddButton from "@/components/AddButton";
import { useRouter } from "next/navigation";

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

export default function AddPartnership() {
  const router = useRouter();
  const partnerships: Partnership[] = [
    {
      id: 1,
      name: "Amazon",
      status: "Complete",
      edi: [
        {
          id: 1,
          EDIDoc: "EDI 850 Purchase Order",
          mandatory: true,
          status: "Validate",
        },
        {
          id: 2,
          EDIDoc: "EDI 860 Purchase Order Change Request",
          mandatory: false,
          status: "Validate",
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
          status: "Validate",
        },
        {
          id: 5,
          EDIDoc: "EDI 820 Payment Order/Remittance Advice",
          mandatory: false,
          status: "Failed",
        },
      ],
    },
    {
      id: 1,
      name: "Amazon",
      status: "Complete",
      edi: [
        {
          id: 1,
          EDIDoc: "EDI 850 Purchase Order",
          mandatory: true,
          status: "Validate",
        },
        {
          id: 2,
          EDIDoc: "EDI 860 Purchase Order Change Request",
          mandatory: false,
          status: "Validate",
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
          status: "Validate",
        },
        {
          id: 5,
          EDIDoc: "EDI 820 Payment Order/Remittance Advice",
          mandatory: false,
          status: "Failed",
        },
      ],
    },
    {
      id: 1,
      name: "Amazon",
      status: "Complete",
      edi: [
        {
          id: 1,
          EDIDoc: "EDI 850 Purchase Order",
          mandatory: true,
          status: "Validate",
        },
        {
          id: 2,
          EDIDoc: "EDI 860 Purchase Order Change Request",
          mandatory: false,
          status: "Validate",
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
          status: "Validate",
        },
        {
          id: 5,
          EDIDoc: "EDI 820 Payment Order/Remittance Advice",
          mandatory: false,
          status: "Failed",
        },
      ],
    },
    {
      id: 2,
      name: "Walmart",
      status: "Complete",
      edi: [
        {
          id: 1,
          EDIDoc: "EDI 850 Purchase Order",
          mandatory: true,
          status: "Validate",
        },
        {
          id: 2,
          EDIDoc: "EDI 860 Purchase Order Change Request",
          mandatory: false,
          status: "Validate",
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
          status: "Validate",
        },
        {
          id: 5,
          EDIDoc: "EDI 820 Payment Order/Remittance Advice",
          mandatory: false,
          status: "Failed",
        },
      ],
    },
    {
      id: 3,
      name: "AutoZone",
      status: "In Process",
      edi: [
        {
          id: 1,
          EDIDoc: "EDI 850 Purchase Order",
          mandatory: true,
          status: "Validate",
        },
        {
          id: 2,
          EDIDoc: "EDI 860 Purchase Order Change Request",
          mandatory: false,
          status: "Validate",
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
          status: "Validate",
        },
        {
          id: 5,
          EDIDoc: "EDI 820 Payment Order/Remittance Advice",
          mandatory: false,
          status: "Failed",
        },
        {
          id: 6,
          EDIDoc: "EDI 850 Purchase Order",
          mandatory: true,
          status: "Validate",
        },
        {
          id: 7,
          EDIDoc: "EDI 860 Purchase Order Change Request",
          mandatory: false,
          status: "Validate",
        },
        {
          id: 8,
          EDIDoc: "EDI 855 Purchase Order Acknowledgment",
          mandatory: true,
          status: "Complete",
        },
        {
          id: 9,
          EDIDoc: "EDI 856 Ship Notice/Manifest",
          mandatory: true,
          status: "Validate",
        },
        {
          id: 10,
          EDIDoc: "EDI 820 Payment Order/Remittance Advice",
          mandatory: false,
          status: "Failed",
        },
      ],
    },
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const [isModal2, setIsModal2] = React.useState(false);
  const [selectedPartnershipId, setSelectedPartnershipId] = React.useState<
    number | null
  >(null);

  const handleViewClick = (id: number) => {
    setSelectedPartnershipId(id);
    setIsOpen(false);
    setIsModal2(true);
  };

  const selectedPartnership = partnerships.find(
    (partnership) => partnership.id === selectedPartnershipId,
  );

  const handleCreateClick = () => {
    partnerships.map((partnership) => {
      if (partnership.id === selectedPartnershipId) {
        router.push(`/Cliente/${partnership.id}`);
      }
    });
  };

  return (
    <>
      <div className="grid justify-items-end">
        <AddButton onClick={() => setIsOpen(true)}>Add Partnership +</AddButton>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <DialogTitle className="text-2xl">Partners</DialogTitle>
        <BrakeRule classname="my-3" />
        <div className="max-h-fit flex flex-col items-center w-full overflow-y-auto overscroll-none">
          {partnerships.map((partnership) => (
            <ListItem key={partnership.id}>
              <p> {partnership.name} Connection </p>
              <GenericButton onClick={() => handleViewClick(partnership.id)}>
                View
              </GenericButton>
            </ListItem>
          ))}
        </div>
      </Modal>
      <Modal isOpen={isModal2} setIsOpen={setIsModal2}>
        <div className="absolute top-4 left-4">
          <BackButton
            onClick={() => {
              setIsOpen(true);
              setIsModal2(false);
            }}
          />
        </div>
        <DialogTitle className="text-2xl">
          {" "}
          {selectedPartnership?.name} Partnership EDI Verification{" "}
        </DialogTitle>
        <BrakeRule classname="my-4" />
        <div className="max-h-full flex flex-col items-center w-full overflow-y-auto overscroll-none">
          {selectedPartnership &&
            selectedPartnership.edi.map((edi) => (
              <ListItem key={edi.id}>
                <p> {edi.EDIDoc} </p>
                <Description>
                  {" "}
                  {edi.mandatory ? "Mandatory" : "Optional"}{" "}
                </Description>
              </ListItem>
            ))}
        </div>
        <BrakeRule classname="my-3" />
        <div className="absolute flex-row bottom-2">
          <div className="inline-block">
            <GenericButton onClick={() => handleCreateClick()}>
              Create
            </GenericButton>
          </div>
        </div>
      </Modal>
    </>
  );
}
