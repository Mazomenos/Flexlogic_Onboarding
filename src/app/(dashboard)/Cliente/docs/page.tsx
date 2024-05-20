"use client";

import {
  DialogPanel,
  DialogTitle,
  Description,
  CloseButton,
  Button,
} from "@headlessui/react";

import Modal from "../components/Modal";
import MyButton from "../components/MyButton";
export default function Home() {
  return (
    <>
      <Modal>
        <DialogTitle className="font-bold">Deactivate account</DialogTitle>
        <Description>This will permanently deactivate your account</Description>
        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed.
        </p>
        <CloseButton as={MyButton}>Cancel</CloseButton>
      </Modal>
    </>
  );
}
