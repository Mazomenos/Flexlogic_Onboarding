"use client";

import { DialogTitle, Description } from "@headlessui/react";
import Modal from "@/components/Modal";
import React from "react";
import CancelButton from "@/components/CancelButton";
import GenericButton from "@/components/GenericButton";
import BackButton from "@/components/BackButton";
import { PiUploadSimple } from "react-icons/pi";

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

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Validate</button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <DialogTitle className="text-2xl">Upload your document</DialogTitle>
        <div className="flex flex-col items-center w-full">
          <button className="m-4 w-80 h-40 p-4 bg-gray-100 text-black rounded-lg hover:bg-gray-200 active:bg-gray-300 flex items-center justify-center">
            <PiUploadSimple className="w-40 h-20" />
          </button>
        </div>
        <div className="flex w-full justify-end">
          <div className="w-full flex justify-end mr-2">
            <CancelButton onClick={() => setIsModal2(false)} />
          </div>

          <GenericButton onClick={() => setIsModal2(false)}>
            {" "}
            Validate{" "}
          </GenericButton>
        </div>
      </Modal>
    </>
  );
}
