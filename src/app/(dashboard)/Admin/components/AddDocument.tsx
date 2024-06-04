"use client";

import { DialogTitle } from "@headlessui/react";
import Modal from "@/components/Modal";
import React from "react";
import BrakeRule from "@/components/BrakeRule";
import AddButton from "@/components/AddButton";
import { useRouter } from "next/navigation";
import ButtonB from "./ButtonB";


const EdiDocument = [
  { value: "", label: "Choose Document" },
  { value: "856", label: "EDI 856" },
  { value: "810", label: "EDI 810" },

];

const delimitersOptions = [
  { value: ",", label: "Comma (,)" },
  { value: ";", label: "Semicolon (;)" },
  { value: "|", label: "Pipe (|)" }
];

const eolOptions = [
  { value: "LF", label: " ~ " },
];

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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <label htmlFor="delimiters">EDI Document</label>
                <select
                  id="delimiters"
                  name="delimiters"
                  className="p-2 border-b-2 border-primary-content/50 dark:border-darkMode-foreground/60 dark:bg-transparent focus:border-blue-300 dark:focus:border-info-content focus:outline-none focus:border-primary-content/50 focus:border-b-2"
                >
                  {EdiDocument.map((item) => (
                    <option value={item.value} className="dark:text-white dark:bg-darkMode-base-100">{item.label}</option>
                  ))}

                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="ediVersion"> Delimiters </label>
                <select
                  id="ediVersion"
                  name="ediVersion"
                  className="p-2 border-b-2 border-primary-content/50 dark:border-darkMode-foreground/60 dark:bg-transparent focus:border-blue-300 dark:focus:border-info-content focus:outline-none focus:border-primary-content/50 focus:border-b-2"
                >
                  {delimitersOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="dark:text-white dark:bg-darkMode-base-100"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="ediVersion"> EOL </label>
                <select
                  id="ediVersion"
                  name="ediVersion"
                  className="p-2 border-b-2 border-primary-content/50 dark:border-darkMode-foreground/60 dark:bg-transparent focus:border-blue-300 dark:focus:border-info-content focus:outline-none focus:border-primary-content/50 focus:border-b-2"
                >
                  {eolOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="dark:text-white dark:bg-darkMode-base-100"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
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
