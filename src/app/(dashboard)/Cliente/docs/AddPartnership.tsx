"use client";

import { DialogTitle, Description } from "@headlessui/react";
import Modal from "@/components/Modal";
import React, { useEffect, useState } from "react";
import ListItem from "@/components/ListItem";
import GenericButton from "@/components/GenericButton";
import BrakeRule from "@/components/BrakeRule";
import BackButton from "@/components/BackButton";
import AddButton from "@/components/AddButton";
import { useRouter } from "next/navigation";
import { GetTPDocsRequired, GetTPVisible, GetUsersPartnerInfo, PostNewPartnership } from "@/DA/usersTpControllers";

import { useHeaderContext } from "@/app/context/headerTrigger";
import { SuccessAction } from "@/components/toasters";

type TPDocsRequired = {
  idDoc: string;
  Doc: string;
  isVisible: boolean;
  isRequired: boolean;
  instructionsPDF: string
};

type Partnership = {
  idPartner: string;
  Name: string;
  Status: string;
};

type TPVisible = {
  id: string;
  Name: string;
}

export default function AddPartnership() {

  const {headerTrigger, setHeaderTrigger} = useHeaderContext()

  const router = useRouter();

  const [isOpen, setIsOpen] = React.useState(false);
  const [isModal2, setIsModal2] = React.useState(false);
  const [selectedPartnershipId, setSelectedPartnershipId] = React.useState<string | null>(null);

  const [TPVisible, setTPVisible] = useState<TPVisible[] | null>(null);
  const [TPDoc, setTPDoc] = useState<TPDocsRequired[] | null>(null);
  const [Partnership, setPartnership] = useState<Partnership[] | null>(null);

  useEffect(() => {
    getUsersPartnerInfo(),
    getTPVisible()
  }, [])

  // gets required docs of a trading partner
  const getTPDocsRequired = async (idPartner: string) => {
    try {
      const response = await GetTPDocsRequired(idPartner);

      if (response) {
        const data = await response;
        if (data) setTPDoc(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // gets a client partnership info 
  const getUsersPartnerInfo = async () => {
    try {
      const response = await GetUsersPartnerInfo()

      if (response) {
        const data = await response;
        if (data) setPartnership(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // gets a visible trading partner for partnership creation
  const getTPVisible = async () => {
    try {
      const response = await GetTPVisible()

      if (response) {
        const data = await response;
        if (data) setTPVisible(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  //posts a new partnership
  const postNewPartnership = async (idPartner:string) => {
    try {
      const response = await PostNewPartnership(idPartner)
      setHeaderTrigger(!headerTrigger)
    } catch (error) {
      console.log(error)
    }
  }

  const handleViewClick = (id: string) => {
    setSelectedPartnershipId(id);
    setIsOpen(false);
    setIsModal2(true);
    getTPDocsRequired(id)
  };

  const selectedPartnership = TPVisible?.find((partner) => partner.id === selectedPartnershipId);

  const handleCreateClick = async (idPartner:string, partnerName:string) => {
    try {
      await postNewPartnership(idPartner);
      setIsModal2(false);
      SuccessAction("Partnership Created")
      router.push(`/Cliente/${partnerName}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="grid justify-items-end">
        <AddButton onClick={() => setIsOpen(true)}>Add Partnership +</AddButton>
      </div>

      {/* Maps trading partners that are visible and are not in a partnership with the client */}
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <DialogTitle className="text-2xl">Partners</DialogTitle>
        <BrakeRule classname="my-3" />
        <div className="max-h-fit flex flex-col items-center w-full overflow-y-auto overscroll-none">
          {TPVisible && TPVisible.map((partner, index) => (
            Partnership?.some((p) => p.idPartner == partner.id) && (
              <ListItem key={index}>
                <p> {partner.Name} Connection </p>
                <GenericButton onClick={() => handleViewClick(partner.id)}>
                  View
                </GenericButton>
              </ListItem>
            )
          ))}
        </div>
      </Modal>

      <Modal isOpen={isModal2} setIsOpen={setIsModal2}>
        <div className="absolute top-4 left-4">
          <BackButton
            onClick={() => {
              setIsOpen(true);
              setIsModal2(false);
            }}
          />
        </div>

        {/* Displays name of trading partner selected to view */}
        <DialogTitle className="text-2xl">
          {" "}
          {selectedPartnership?.Name} Partnership EDI Verification{" "}
        </DialogTitle>

        {/* Displays selected TPDocsRequired*/}
        <BrakeRule classname="my-4" />
        <div className="max-h-full flex flex-col items-center w-full overflow-y-auto overscroll-none">
          {TPDoc &&
            TPDoc.map((partnership, index) => (
              <ListItem key={index}>
                <p> {partnership.Doc} </p>
                <Description>
                  {" "}
                  {partnership.isRequired ? "Mandatory" : "Optional"}{" "}
                </Description>
              </ListItem>
            ))}
        </div>
        <BrakeRule classname="my-3" />


        <div className="absolute flex-row bottom-2">
          <div className="inline-block">
            {selectedPartnershipId && selectedPartnership && (
              <GenericButton onClick={() => handleCreateClick(selectedPartnershipId,selectedPartnership?.Name)}>
              Create
            </GenericButton>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}