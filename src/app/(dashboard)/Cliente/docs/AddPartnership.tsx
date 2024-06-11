import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GetTPDocsRequired, GetTPVisible, GetUsersPartnerInfo, PostNewPartnership } from "@/DA/usersTpControllers";
import { useHeaderContext } from "@/app/context/headerTrigger";
import { SuccessAction } from "@/components/toasters";
import { DialogTitle, Description } from "@headlessui/react";
import Modal from "@/components/Modal";
import ListItem from "@/components/ListItem";
import GenericButton from "@/components/GenericButton";
import BrakeRule from "@/components/BrakeRule";
import BackButton from "@/components/BackButton";
import AddButton from "@/components/AddButton";

type TPDocsRequired = {
  idDoc: string;
  Doc: string;
  isVisible: boolean;
  isRequired: boolean;
  instructionsPDF: string;
};

type Partnership = {
  idPartner: string;
  Name: string;
  Status: string;
};

type TPVisible = {
  id: string;
  Name: string;
};

export default function AddPartnership() {
  const { headerTrigger, setHeaderTrigger } = useHeaderContext();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isModal2, setIsModal2] = useState(false);
  const [selectedPartnershipId, setSelectedPartnershipId] = useState<string | null>(null);
  const [TPVisible, setTPVisible] = useState<TPVisible[] | null>(null);
  const [TPDoc, setTPDoc] = useState<TPDocsRequired[] | null>(null);
  const [Partnership, setPartnership] = useState<Partnership[] | null>(null);

  useEffect(() => {
    getUsersPartnerInfo();
    getTPVisible();
  }, []);

  const getTPDocsRequired = async (idPartner: string) => {
    try {
      const response = await GetTPDocsRequired(idPartner);
      if (response) {
        const data = response;
        if (data) setTPDoc(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUsersPartnerInfo = async () => {
    try {
      const response = await GetUsersPartnerInfo();
      if (response) {
        const data = await response;
        if (data) setPartnership(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getTPVisible = async () => {
    try {
      const response = await GetTPVisible();
      if (response) {
        const data = await response;
        if (data) setTPVisible(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postNewPartnership = async (idPartner: string) => {
    try {
      const response = await PostNewPartnership(idPartner);
      setHeaderTrigger(!headerTrigger);
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewClick = (id: string) => {
    setSelectedPartnershipId(id);
    setIsOpen(false);
    setIsModal2(true);
    getTPDocsRequired(id);
  };

  const selectedPartnership = TPVisible?.find((partner) => partner.id === selectedPartnershipId);

  const handleCreateClick = async (idPartner: string, partnerName: string) => {
    try {
      await postNewPartnership(idPartner);
      setIsModal2(false);
      SuccessAction("Partnership Created");
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

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <DialogTitle className="text-2xl">Partners</DialogTitle>
        <BrakeRule classname="my-3" />
        <div className="max-h-fit flex flex-col items-center w-full overflow-y-auto overscroll-none">
          {TPVisible && TPVisible.length > 0 ? (
            TPVisible.map((partner, index) => (
              !Partnership?.some((p) => p.idPartner === partner.id) && (
                <ListItem key={index}>
                  <p> {partner.Name} Connection </p>
                  <GenericButton onClick={() => handleViewClick(partner.id)}>View</GenericButton>
                </ListItem>
              )
            ))
          ) : (
            <div>
            <p className="">At the moment there are no more Partnerships</p>
            <BrakeRule classname="my-4" />
            </div>
          )}
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

        <DialogTitle className="text-2xl">{selectedPartnership?.Name} Partnership EDI Verification</DialogTitle>
        <BrakeRule classname="my-4" />
        <div className="max-h-full flex flex-col items-center w-full overflow-y-auto overscroll-none">
          {TPDoc && TPDoc.length > 0 ? (
            TPDoc.map((partnership, index) => (
              <ListItem key={index}>
                <p> {partnership.Doc} </p>
                <Description>{partnership.isRequired ? "Mandatory" : "Optional"}</Description>
              </ListItem>
            ))
          ) : (
            <div>
              <p className="text-2xl">This partner does not have any document to validate</p>
              <BrakeRule classname="my-4" />
            </div>
          )}
        </div>
        <BrakeRule classname="my-3" />
        <div className="absolute flex-row bottom-2">
          <div className="inline-block">
            {selectedPartnershipId && selectedPartnership && (
              <GenericButton onClick={() => handleCreateClick(selectedPartnershipId, selectedPartnership.Name)}>
                Create
              </GenericButton>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
