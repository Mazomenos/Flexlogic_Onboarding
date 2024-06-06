"use client";
import BrakeRule from "@/components/BrakeRule";
import ListItem from "@/components/ListItem";
import React, { useEffect, useState } from "react";
import BackButton from "@/components/BackButton";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";
import { DialogTitle } from "@headlessui/react";
import DeleteButton from "@/components/DeleteButton";
import CancelButton from "@/components/CancelButton";
import DrawerDefault from "../components/DrawerDefault";
import AddDocument from "../components/AddDocument";
import DocumentsList from "../components/DocumentsList";
import { GetTPDocsRequired } from "@/DA/usersTpControllers";
import { deleteTPDoc } from "@/DA/TpDocsController";

type EDI = {
  idDoc: string;
  Doc: string;
  isVisible: boolean;
  isRequired: boolean;
};

export default function Home() {
  const router = useRouter();

  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedDocumentId, setSelectedDocumentId] = React.useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const [edi, setEdi] = useState<EDI[]>([]);

  // created db call to fetch docsRequired 
  const getTPDocsRequired = async () => {
    try {
      const response = await GetTPDocsRequired("664d76a8d7412ac29ddf6a1b");
      if (response) {
        const data = await response;
        if (data) {
          setEdi(data)
          setTemporalDocuments(data)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getTPDocsRequired()
  }, [])

  // Created a 'Mirror' list, this will prevent db calls when a user changes visibility or mandatory status,
  // and will only update in database once the user selects save button.
  const [temporalDocument, setTemporalDocuments] = React.useState<EDI[]>(edi);

  // Function that handles the visibility of drawer, attached to ActionsButton.tsx
  const handleEditButton = (id: string) => {
    setSelectedDocumentId(id);
    setDrawerOpen(true);
  };

  // This function deletes an item from the 'Mirror' temporal EDI list, so the user does not need to refresh the page
  // to see the list without the items.
  const deleteTemporalItem = (id: string) => {
    const newDocuments = temporalDocument.filter(
      (document) => document.idDoc !== id,
    );
    setTemporalDocuments(newDocuments);
  };

  // This function deletes an item from the database
  const deleteDatabaseItem = async (id: string) => {
    try {
      
      await deleteTPDoc("664d76a8d7412ac29ddf6a1b", id);
  
      // Check if this
      setIsOpen(false);
      deleteTemporalItem(id);
      const newEDI = edi.filter((document) => document.idDoc !== id);
      console.log(newEDI)
      setEdi(newEDI);

    } catch (error) {
      console.log(error)
    }
  };

  const selectedDocument = edi.find((edi) => edi.idDoc === selectedDocumentId);


  // Function that handles the visibility of delete modal, attached to ActionsButton.tsx
  const handleDeleteActionButton = (id: string) => {
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
            <DeleteButton onClick={() => selectedDocument && selectedDocument.idDoc && deleteDatabaseItem(selectedDocument.idDoc)} />
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