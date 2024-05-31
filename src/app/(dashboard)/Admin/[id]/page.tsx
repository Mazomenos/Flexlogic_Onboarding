"use client";
import BrakeRule from "@/components/BrakeRule";
import ListItem from "@/components/ListItem";
import React, { useState } from "react";
import BackButton from "@/components/BackButton";
import { useRouter } from "next/navigation";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ActionsButton from "../components/ActionsButton";
import Modal from "@/components/Modal";
import { DialogTitle } from "@headlessui/react";
import DeleteButton from "@/components/DeleteButton";
import CancelButton from "@/components/CancelButton";
import DrawerDefault from "../components/DrawerDefault";
import AddDocument from "../components/AddDocument";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import DocumentsList from "../components/DocumentsList";
import { Handshake } from "lucide-react";

type EDI = {
  IdDoc: number;
  Doc: string;
  isVisible: boolean;
  isRequired: boolean;
};

export default function Home() {
  const router = useRouter();

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedDocumentId, setSelectedDocumentId] = React.useState<
    number | null
  >(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [edi, setEdi] = useState<EDI[]>([
    {
      IdDoc: 1,
      Doc: "EDI 850 Purchase Order",
      isVisible: true,
      isRequired: true,
    },
    {
      IdDoc: 2,
      Doc: "EDI 860 Purchase Order Change Request",
      isVisible: true,
      isRequired: false,
    },
    {
      IdDoc: 3,
      Doc: "EDI 855 Purchase Order Acknowledgment",
      isVisible: true,
      isRequired: true,
    },
    {
      IdDoc: 4,
      Doc: "EDI 856 Ship Notice/Manifest",
      isVisible: true,
      isRequired: true,
    },
    {
      IdDoc: 5,
      Doc: "EDI 820 Payment Order/Remittance Advice",
      isVisible: true,
      isRequired: false,
    },
  ]);

  const handleEditButton = (id: number) => {
    setSelectedDocumentId(id);
    setDrawerOpen(true);
  };

  const deleteItem = (id: number | undefined) => {
    setIsOpen(false);
    setEdi((prevEdi) => prevEdi.filter((doc) => doc.IdDoc !== id));
  };

  const handleRequired = (id: number) => {
    setEdi((prevEdi) =>
      prevEdi.map((doc) =>
        doc.IdDoc === id ? { ...doc, isRequired: !doc.isRequired } : doc,
      ),
    );
  };

  const handleVisible = (id: number) => {
    setEdi((prevEdi) =>
      prevEdi.map((doc) =>
        doc.IdDoc === id ? { ...doc, isVisible: !doc.isVisible } : doc,
      ),
    );
  };

  const selectedDocument = edi.find((edi) => edi.IdDoc === selectedDocumentId);

  const handleDeleteButton = (id: number) => {
    setSelectedDocumentId(id);
    setIsOpen(true);
  };

  return (
    <>
      <div className="h-full flex flex-col">
        <div className="relative flex justify-center md:justify-end">
          <div className="absolute top-1 left-0">
            <BackButton
              onClick={() => {
                router.back();
              }}
            />
          </div>
          <AddDocument />
        </div>
        <BrakeRule />
        <div className="max-h-full flex flex-col items-center w-full overflow-y-auto overscroll-none">
          <ListItem>
            <div className="flex flex-row w-full items-center">
              <p className="basis-2/6">Documents</p>
              <p className="basis-1/6 grid justify-items-center content-center">
                Visible
              </p>
              <p className="basis-1/6 grid justify-items-center content-center">
                Mandatory
              </p>
              <p className="basis-1/6 grid justify-items-center content-center">
                Actions
              </p>
              <p className="basis-1/6 grid justify-items-center content-center">
                Save Changes
              </p>
            </div>
          </ListItem>
          <DocumentsList
            Documents={edi}
            handleDeleteButton={handleDeleteButton}
            handleEditButton={handleEditButton}
          />
        </div>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <DialogTitle className="text-2xl">Delete Document</DialogTitle>
          <div className="text-center">
            <p className="text-xl">
              Are you sure you want to delete &quot;
              <span className="font-bold">{selectedDocument?.Doc}</span>
              &quot;?
            </p>
          </div>
          <div className="my-3" />
          <div className="w-[60%] flex flex-col sm:flex-row justify-between">
            <CancelButton onClick={() => setIsOpen(false)} />
            <DeleteButton onClick={() => deleteItem(selectedDocument?.IdDoc)} />
          </div>
        </Modal>
      </div>
      <DrawerDefault
        open={drawerOpen}
        setOpen={setDrawerOpen}
        idDocument={selectedDocumentId}
      ></DrawerDefault>
    </>
  );
}
