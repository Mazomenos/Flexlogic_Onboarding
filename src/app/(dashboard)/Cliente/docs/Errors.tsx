// Errors.tsx
"use client";

import { DialogTitle } from "@headlessui/react";
import Modal from "@/components/Modal";
import React from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import CancelButton from "@/components/CancelButton";
import ListItem from "@/components/ListItem";
import BrakeRule from "@/components/BrakeRule";
import AddButon from "@/components/AddButton";
import { IoMdDownload } from "react-icons/io";
import GenericButton from "@/components/GenericButton";
import ValidationForm from "../components/ValidationForm";

type Errors = {
  id: number;
  typeError: string;
  desc: string;
};

export default function Errors({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const errors: Errors[] = [
    { id: 1, typeError: "Segmentation", desc: "This is a mandatory document" },
    { id: 2, typeError: "Elements", desc: "This is a optional document" },
    { id: 3, typeError: "Segmentation", desc: "This is a mandatory document" },
    { id: 4, typeError: "Elements", desc: "This is a mandatory document" },
    { id: 5, typeError: "Elements", desc: "This is a mandatory document" },
    { id: 6, typeError: "Segmentation", desc: "This is a mandatory document" },
    { id: 7, typeError: "Elements", desc: "This is a optional document" },
  ];

  const download = () => {
    console.log("Downloaded");
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <DialogTitle className="text-2xl">ERRORS</DialogTitle>
      <BrakeRule classname="my-3" />
      <div className="max-h-fit flex flex-col items-center w-full overflow-y-auto overscroll-none">
        {errors.map((error) => (
          <ListItem key={error.id}>
            <div className="flex flex-row w-full">
              <p className="basis-3/12 uppercase font-bold text-error-content/80">
                {error.typeError}
              </p>
              <div className="basis-1/12">
                <TfiLayoutLineSolid
                  style={{ transform: "rotate(90deg)" }}
                  className="grid content-center h-full"
                  size={32}
                />
              </div>
              <p className="basis-8/12 text-error-content/60">{error.desc}</p>
            </div>
          </ListItem>
        ))}
      </div>
      <BrakeRule classname="my-3" />
      <AddButon onClick={() => download()}>
        {" "}
        Download All <IoMdDownload />{" "}
      </AddButon>
      <div className="absolute bottom-2 w-full flex justify-end mr-5 p-3">
        <div className="mr-2">
          <CancelButton onClick={() => setIsOpen(false)} />{" "}
        </div>
        <ValidationForm />
      </div>
    </Modal>
  );
}
