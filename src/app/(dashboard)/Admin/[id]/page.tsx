"use client";
import BrakeRule from "@/components/BrakeRule";
import ListItem from "@/components/ListItem";
import React, { useState } from "react";
import BackButton from "@/components/BackButton";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";
import { DialogTitle } from "@headlessui/react";
import DeleteButton from "@/components/DeleteButton";
import CancelButton from "@/components/CancelButton";
import DrawerDefault from "../components/DrawerDefault";
import AddDocument from "../components/AddDocument";
import DocumentsList from "../components/DocumentsList";

type EDI = {
  IdDoc: number;
  Doc: string;
  isVisible: boolean;
  isRequired: boolean;
};

export default function Home() {
  const router = useRouter();

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

  // Created a 'Mirror' list, this will prevent db calls when a user changes visibility or mandatory status,
  // and will only update in database once the user selects save button.
  const [temporalDocument, setTemporalDocuments] = React.useState(edi);

  // Function that handles the visibility of drawer, attached to ActionsButton.tsx
  const handleEditButton = (id: number) => {
    setSelectedDocumentId(id);
    setDrawerOpen(true);
  };

  // This function deletes an item from the 'Mirror' temporal EDI list, so the user does not need to refresh the page
  // to see the list without the items.
  const deleteTemporalItem = (id: number | undefined) => {
    const newDocuments = temporalDocument.filter(
      (document) => document.IdDoc !== id,
    );
    setTemporalDocuments(newDocuments);
  };

  // #FIXME: change this function to controllers.
  // This functions must delete an item from the database
  const deleteDatabaseItem = (id: number | undefined) => {
    // Check if this
    setIsOpen(false);
    deleteTemporalItem(id);
    const newEDI = edi.filter((document) => document.IdDoc !== id);
    setEdi(newEDI);
  };

  const selectedDocument = edi.find((edi) => edi.IdDoc === selectedDocumentId);

  // Function that handles the visibility of delete modal, attached to ActionsButton.tsx
  const handleDeleteActionButton = (id: number) => {
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
                Mandatory
              </p>
              <p className="basis-1/6 grid justify-items-center content-center">
                Visible
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
            handleDeleteDocument={deleteTemporalItem}
            temporalDocuments={temporalDocument}
            setTemporalDocuments={setTemporalDocuments}
            Documents={edi}
            handleDeleteButton={handleDeleteActionButton}
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
            <DeleteButton
              onClick={() => deleteDatabaseItem(selectedDocument?.IdDoc)}
            />
          </div>
        </Modal>
      </div>
      <DrawerDefault
        open={drawerOpen}
        setOpen={setDrawerOpen}
        idDocument={selectedDocumentId}
        documentTitle={selectedDocument?.Doc}
      ></DrawerDefault>
    </>
  );
}
