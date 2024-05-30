"use client";

import { DialogTitle } from "@headlessui/react";
import Modal from "@/components/Modal";
import React from "react";
import BrakeRule from "@/components/BrakeRule";
import AddButton from "@/components/AddButton";
import { useRouter } from "next/navigation";
import ButtonB from "./ButtonB";

export default function AddDocument() {
  const router = useRouter();

  const [isOpen, setIsOpenForms] = React.useState(false);

  return (
    <>
      <div className="w-full flex justify-end mt-1">
        <AddButton onClick={() => setIsOpenForms(true)}>
          Add Document +
        </AddButton>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpenForms}>
        <DialogTitle className="text-2xl">Create Document</DialogTitle>
        <BrakeRule classname="my-3" />
        <div className="w-full overflow-y-scroll">
          <form className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="delimiters">Delimiters</label>
              <select
                id="delimiters"
                name="delimiters"
                className="p-2 border-b-2 border-primary-content/50 dark:border-darkMode-foreground/60 dark:bg-transparent focus:border-blue-300 dark:focus:border-info-content focus:outline-none focus:border-primary-content/50 focus:border-b-2"
              >
                <option value="">Choose Document</option>
                <option value="856">EDI 856</option>
                <option value="810">EDI 810</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="ediVersion">EDI Version</label>
              <select
                id="ediVersion"
                name="ediVersion"
                className="p-2 border-b-2 border-primary-content/50 dark:border-darkMode-foreground/60 dark:bg-transparent focus:border-blue-300 dark:focus:border-info-content focus:outline-none focus:border-primary-content/50 focus:border-b-2"
              >
                <option value="">Choose EDI version</option>
                <option value="4010">X12 4010</option>
              </select>
            </div>
            <div className="flex justify-center">
              <ButtonB
                onClick={() => setIsOpenForms(false)}
                className=" w-full"
              >
                Create
              </ButtonB>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
