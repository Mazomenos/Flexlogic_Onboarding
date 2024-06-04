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
import { GetTPDocsRequired, GetTPVisible, GetUsersPartnerInfo } from "@/DA/usersTpControllers";

type TPDocsRequired = {
  idDoc: string;
  Doc: string;
  isVisible: boolean;
  isRequired: boolean;
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
  const router = useRouter();

  const [isOpen, setIsOpen] = React.useState(false);
  const [isModal2, setIsModal2] = React.useState(false);
  const [selectedPartnershipId, setSelectedPartnershipId] = React.useState<string | null>(null);

  const [TPVisible, setTPVisible] = useState<TPVisible[] | null>(null);
  const [TPDoc, setTPDoc] = useState<TPDocsRequired[] | null>(null);
  const [Partnership, setPartnership] = useState<Partnership[] | null>(null);


  // gets required docs of a trading partner
  const getTPDocsRequired = async () => {
    try {
      const response = await GetTPDocsRequired("665d706a267213074dfcbf7c")

      if (response) {
        const data = await response;
        if (data) setTPDoc(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTPDocsRequired()
  }, [])


  // gets a client partnership info 
  const getUsersPartnerInfo = async () => {
    try {
      const response = await GetUsersPartnerInfo("665a0753b9c7af2580bc0ad5")

      if (response) {
        const data = await response;
        if (data) setPartnership(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsersPartnerInfo()
  }, [])


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

  useEffect(() => {
    getTPVisible()
  }, [])


  const handleViewClick = (id: string) => {
    setSelectedPartnershipId(id);
    setIsOpen(false);
    setIsModal2(true);
  };

  const selectedPartnership = TPVisible?.find((partner) => partner.id === selectedPartnershipId);

  const handleCreateClick = () => {
    Partnership?.map((partnership) => {
      if (partnership.idPartner === selectedPartnershipId) {
        router.push(`/Cliente/${partnership.idPartner}`);
      }
    });
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
            !Partnership?.some((p) => p.idPartner == partner.id) && (
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
            <GenericButton onClick={() => handleCreateClick()}>
              Create
            </GenericButton>
          </div>
        </div>
      </Modal>
    </>
  );
}