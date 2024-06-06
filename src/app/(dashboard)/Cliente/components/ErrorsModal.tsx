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
import { downloadPreviousEDI } from "@/DA/fileManagerControllers";
import { saveAs } from 'file-saver';

export default function Errors({
  isOpen,
  setIsOpen,
  setIsUploadOpen,
  errorLog,
  dataUserDoc,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUploadOpen: React.Dispatch<React.SetStateAction<boolean>>;
  errorLog: any[];
  dataUserDoc: Array<string>;
}) {

  async function download() {
    try {             
      const fileContent = await downloadPreviousEDI(dataUserDoc);
      const text = String.fromCharCode.apply(null, Array.from(new Uint8Array(fileContent.content)));
      saveAs(new Blob([text], { type: 'text/plain' }), fileContent.fileName);
    } catch (err) {
      console.log('Error downloading file: ' + (err as Error).message);
    }
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
