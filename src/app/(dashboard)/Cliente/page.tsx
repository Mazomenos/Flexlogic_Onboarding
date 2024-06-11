"use client";
import BrakeRule from "@/components/BrakeRule";
import ListItem from "@/components/ListItem";
import Badge from "./components/Badge";
import AddPartnership from "./docs/AddPartnership";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { GetUsersPartnerInfo } from "@/DA/usersTpControllers";
import ActionsButton from "@/components/ActionsButton";
import React from "react";
import DeletePartnershipModal from "./components/DeletePartnershipModal";
import ListHeader from "@/components/ListHeader";

type Partnership = {
  idPartner: string;
  Name: string;
  Status: string;
};

export default function Home() {
  const router = useRouter();

  const [TPInfo, setTPInfo] = useState<Partnership[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // gets client partnership information
  const getTPInfo = async () => {
    try {
      const response = await GetUsersPartnerInfo();

      if (response) {
        const data = await response;
        console.log(data);
        if (data) setTPInfo(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTPInfo();
  }, []);

  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedPartnershipId, setSelectedPartnershipId] = React.useState<
    string | null
  >(null);
  const [value, setValue] = React.useState("");

  // Function that handles the visibility of delete modal, attached to ActionsButton.tsx
  const handleDeleteButton = (id: string) => {
    setSelectedPartnershipId(id);
    setValue("");
    setIsOpen(true);
  };
  const selectedPartnership =
    TPInfo &&
    TPInfo.find(
      (partnership) => partnership.idPartner === selectedPartnershipId,
    );

  // Function that redirects the user to the selected TP
  const handleEditButton = (id: string) => {
    TPInfo &&
      TPInfo.map((partner) => {
        if (partner.idPartner === id) {
          router.push(`/Cliente/${partner.Name}`);
        }
      });
  };

  // Handler that check's delete modal value
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  function handlePartnershipRedirect(path: string) {
    router.push(`/Cliente/${path}`);
  }

  return (
    <div className="h-full flex flex-col ">
      <div className="w-full mt-1 justify-end flex">
        <AddPartnership />
      </div>

      <BrakeRule />

      {/* Muestra un componente de carga mientras se obtienen los datos */}
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <div className="max-h-full flex flex-col items-center w-full overflow-y-auto overscroll-none">
          <ListHeader>
            <div className="basis-8/12 flex flex-row w-full items-center">
              <p className="">Partnership</p>
            </div>
            <div className="basis-2/12 flex w-full justify-center">
              <p className=" flex justify-center ">Status</p>
            </div>
            <div className="basis-2/12 flex w-full justify-center">
              <p className=" flex justify-center ">Actions</p>
            </div>
          </ListHeader>
          {TPInfo &&
            TPInfo.map((partnership, index) => (
              <ListItem key={index}>
                <div className="basis-8/12">
                  <p>{partnership.Name} </p>
                </div>
                <div className="basis-2/12 flex justify-center">
                  <Badge status={partnership.Status} />
                </div>
                <div className="basis-2/12 flex justify-center">
                  <ActionsButton
                    itemId={partnership.idPartner}
                    handleDeleteButton={() =>
                      handleDeleteButton(partnership.idPartner)
                    }
                    handleEditButton={handleEditButton}
                  />
                </div>
              </ListItem>
            ))}
        </div>
      )}
      <DeletePartnershipModal
        handleChange={handleChange}
        selectedPartnership={selectedPartnership}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        value={value}
        deleteDatabasePartnership={() => {
          console.log("deleted");
        }}
      />
    </div>
  );
}
