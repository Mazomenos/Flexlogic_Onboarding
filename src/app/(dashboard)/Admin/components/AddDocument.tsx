"use client";

import { DialogTitle } from "@headlessui/react";
import Modal from "@/components/Modal";
import React, { useState, useRef, ChangeEvent } from "react";
import BrakeRule from "@/components/BrakeRule";
import AddButton from "@/components/AddButton";
import { useRouter } from "next/navigation";
import { FaUpload } from "react-icons/fa";

const EdiDocument = [
  { value: "", label: "Choose Document" },
  { value: "856", label: "EDI 856" },
  { value: "810", label: "EDI 810" },
];

const delimitersOptions = [
  { value: ",", label: "Comma (,)" },
  { value: ";", label: "Semicolon (;)" },
  { value: "|", label: "Pipe (|)" },
];

const eolOptions = [{ value: "LF", label: " ~ " }];

export default function AddDocument() {
  const router = useRouter();
  const [isOpen, setIsOpenForms] = useState(false);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
      setFile(event.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleOpenModal = () => {
    setFileName("");
    setFile(null);
    setIsOpenForms(true);
  };

  return (
    <>
      <div className="w-full flex justify-end mt-1">
        <AddButton onClick={handleOpenModal}>Add Document +</AddButton>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpenForms}>
        <DialogTitle className="text-2xl">Create Document</DialogTitle>
        <BrakeRule classname="my-3" />
        <div className="w-full overflow-y-scroll">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <label htmlFor="ediDocument">EDI Document</label>
                <select
                  id="ediDocument"
                  name="ediDocument"
                  className="p-2 border-b-2 border-primary-content/50 dark:border-darkMode-foreground/60 dark:bg-transparent focus:border-blue-300 dark:focus:border-info-content focus:outline-none focus:border-primary-content/50 focus:border-b-2"
                >
                  {EdiDocument.map((item, index) => (
                    <option
                      key={index}
                      value={item.value}
                      className="dark:text-white dark:bg-darkMode-base-100"
                    >
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="delimiters">Delimiters</label>
                <select
                  id="delimiters"
                  name="delimiters"
                  className="p-2 border-b-2 border-primary-content/50 dark:border-darkMode-foreground/60 dark:bg-transparent focus:border-blue-300 dark:focus:border-info-content focus:outline-none focus:border-primary-content/50 focus:border-b-2"
                >
                  {delimitersOptions.map((option, index) => (
                    <option
                      key={index}
                      value={option.value}
                      className="dark:text-white dark:bg-darkMode-base-100"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="eol">EOL</label>
                <select
                  id="eol"
                  name="eol"
                  className="p-2 border-b-2 border-primary-content/50 dark:border-darkMode-foreground/60 dark:bg-transparent focus:border-blue-300 dark:focus:border-info-content focus:outline-none focus:border-primary-content/50 focus:border-b-2"
                >
                  {eolOptions.map((option, index) => (
                    <option
                      key={index}
                      value={option.value}
                      className="dark:text-white dark:bg-darkMode-base-100"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div
              className="flex flex-col text-primary-content/40 dark:text-darkMode-foreground/40 items-center hover:bg-info/30 hover:text-info-content dark:hover:bg-darkMode-info dark:hover:text-darkMode-info-content justify-center border-2 border-dashed border-primary-content/40 dark:border-darkMode-foreground/40 p-6 rounded-lg cursor-pointer hover:border-info-content dark:hover:border-darkMode-info-content transition motion-reduce:transition-none motion-reduce:hover:transform-none"
              onClick={handleUploadClick}
            >
              <FaUpload className="text-6xl mb-4" />
              <input
                type="file"
                id="fileInput"
                accept=".pdf,.edi,.txt"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <p className="">
                {fileName
                  ? fileName
                  : "Drag & drop a file here or click to upload"}
              </p>
            </div>

            <div className="w-full flex justify-center">
              <button
                disabled={file != null ? false : true}
                className={
                  "text-base disabled:bg-base-300/30 dark:disabled:bg-darkMode-base-300/30 dark:disabled:border-darkMode-foreground/30 disabled:border-primary-content/30 disabled:cursor-not-allowed disabled:text-primary-content/30 dark:disabled:text-darkMode-foreground/30 font-bold  h-10 border-primary dark:border-darkMode-primary border-2 bg-info dark:bg-darkMode-primary text-info-content dark:text-darkMode-base-100 font-bold hover:bg-transparent dark:hover:bg-transparent hover:text-info-content/70 dark:hover:text-darkMode-primary hover:border-primary dark:hover:border-darkMode-primary transition motion-reduce:transition-none motion-reduce:hover:transform-none w-32"
                }
                onClick={() => setIsOpenForms(false)}
              >
                <div> Create </div>
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
