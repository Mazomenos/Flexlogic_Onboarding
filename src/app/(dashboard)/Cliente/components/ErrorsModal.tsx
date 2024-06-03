// Errors.tsx
"use client";

import { DialogTitle } from "@headlessui/react";
import Modal from "@/components/Modal";
import React from "react";
import BrakeRule from "@/components/BrakeRule";
import AddButon from "@/components/AddButton";
import { IoMdDownload } from "react-icons/io";
import GenericButton from "@/components/GenericButton";
import ErrorItem from "./ErrorItem";

export default function Errors({
  isOpen,
  setIsOpen,
  setIsUploadOpen,
  errorLog
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUploadOpen: React.Dispatch<React.SetStateAction<boolean>>;
  errorLog: any[]
}) {

  const download = () => {
    console.log("Downloaded");
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <DialogTitle className="text-2xl">ERRORS</DialogTitle>
      <BrakeRule classname="my-3" />
      <div className="h-full justify-center flex-col overflow-y-auto w-full">
        {errorLog.map((error, index) => (
          <ErrorItem key={index} type={error.Type} title={error.Title}>
            {error.Description}
          </ErrorItem>
        ))}
      </div>
      <BrakeRule classname="my-3" />
      <AddButon onClick={() => download()}>
        Download All <IoMdDownload />
      </AddButon>
      <BrakeRule classname="my-3" />
      <div className="absolute bottom-4 w-full flex justify-center ">
        <GenericButton onClick={() => {setIsOpen(false); setIsUploadOpen(true)}}>Validate</GenericButton>
      </div>
    </Modal>
  );
}
