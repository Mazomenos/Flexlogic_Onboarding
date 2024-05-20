"use client";

import { DialogTitle, Description } from "@headlessui/react";

import Modal from "../components/Modal";
import MyButton from "../components/MyButton";
import React from "react";
import CancelButton from "@/components/CancelButton";
export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isModal2, setIsModal2] = React.useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open dialog</button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <DialogTitle className="font-bold">Deactivate account</DialogTitle>
        <Description>This will permanently deactivate your account</Description>
        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed.
        </p>
        <CancelButton
          onClick={() => {
            setIsOpen(false);
            setIsModal2(true);
          }}
        />
      </Modal>
      <Modal isOpen={isModal2} setIsOpen={setIsModal2}>
        <DialogTitle className="font-bold">Deactivate account</DialogTitle>
        <Description>This will permanently deactivate your account</Description>
        <p>Modal2</p>
        <CancelButton
          onClick={() => {
            setIsModal2(false);
          }}
        />
      </Modal>
    </>
  );
}
