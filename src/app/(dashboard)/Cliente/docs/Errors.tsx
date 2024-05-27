// Errors.tsx
"use client";

import { DialogTitle } from "@headlessui/react";
import Modal from "@/components/Modal";
import React from "react";
import CancelButton from "@/components/CancelButton";
import BrakeRule from "@/components/BrakeRule";
import AddButon from "@/components/AddButton";
import { IoMdDownload } from "react-icons/io";
import GenericButton from "@/components/GenericButton";
import ErrorItem from "../components/ErrorItem";

type Errors = {
  id: number;
  typeError: string;
  title: string;
  description: string;
};

export default function Errors({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const errors: Errors[] = [
    {
      id: 1,
      typeError: "Segmentation",
      title: "This is a mandatory document",
      description:
        "Et ea esse aute elit ullamco. Ipsum irure voluptate est adipisicing consectetur aliqua ullamco non et pariatur do exercitation fugiat. Labore id fugiat adipisicing consequat esse nulla laborum dolor officia labore anim et incididunt adipisicing.",
    },
    {
      id: 2,
      typeError: "Elements",
      title: "This is a optional document",
      description:
        "Et ea esse aute elit ullamco. Ipsum irure voluptate est adipisicing consectetur aliqua ullamco non et pariatur do exercitation fugiat. Labore id fugiat adipisicing consequat esse nulla laborum dolor officia labore anim et incididunt adipisicing.",
    },
    {
      id: 3,
      typeError: "Segmentation",
      title: "This is a mandatory document",
      description:
        "Et ea esse aute elit ullamco. Ipsum irure voluptate est adipisicing consectetur aliqua ullamco non et pariatur do exercitation fugiat. Labore id fugiat adipisicing consequat esse nulla laborum dolor officia labore anim et incididunt adipisicing.",
    },
    {
      id: 4,
      typeError: "Elements",
      title: "This is a mandatory document",
      description:
        "Et ea esse aute elit ullamco. Ipsum irure voluptate est adipisicing consectetur aliqua ullamco non et pariatur do exercitation fugiat. Labore id fugiat adipisicing consequat esse nulla laborum dolor officia labore anim et incididunt adipisicing.",
    },
    {
      id: 5,
      typeError: "Elements",
      title: "This is a mandatory document",
      description:
        "Et ea esse aute elit ullamco. Ipsum irure voluptate est adipisicing consectetur aliqua ullamco non et pariatur do exercitation fugiat. Labore id fugiat adipisicing consequat esse nulla laborum dolor officia labore anim et incididunt adipisicing.",
    },
    {
      id: 6,
      typeError: "Segmentation",
      title: "This is a mandatory document",
      description:
        "Et ea esse aute elit ullamco. Ipsum irure voluptate est adipisicing consectetur aliqua ullamco non et pariatur do exercitation fugiat. Labore id fugiat adipisicing consequat esse nulla laborum dolor officia labore anim et incididunt adipisicing.",
    },
    {
      id: 7,
      typeError: "Elements",
      title: "This is a optional document",
      description:
        "Et ea esse aute elit ullamco. Ipsum irure voluptate est adipisicing consectetur aliqua ullamco non et pariatur do exercitation fugiat. Labore id fugiat adipisicing consequat esse nulla laborum dolor officia labore anim et incididunt adipisicing.",
    },
  ];

  const download = () => {
    console.log("Downloaded");
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <DialogTitle className="text-2xl">ERRORS</DialogTitle>
      <BrakeRule classname="my-3" />
      <div className="h-full justify-center flex-col overflow-y-auto w-full">
        {errors.map((error, index) => (
          <ErrorItem key={index} type={error.typeError} title={error.title}>
            {error.description}
          </ErrorItem>
        ))}
      </div>
      <BrakeRule classname="my-3" />
      <AddButon onClick={() => download()}>
        Download All <IoMdDownload />
      </AddButon>
      <BrakeRule classname="my-3" />
      <div className="absolute bottom-2 w-full flex justify-center ">
        <GenericButton onClick={() => setIsOpen(false)}>Validate</GenericButton>
      </div>
    </Modal>
  );
}
