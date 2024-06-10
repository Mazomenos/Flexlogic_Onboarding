/*
 * Main page of client, here the client user can visualize
 * Partnerships and their respective states.
 * They can also click Add Partnership button to start the add partnership process.
 */

"use client";
import BrakeRule from "@/components/BrakeRule";
import ListItem from "@/components/ListItem";
import Badge from "./components/Badge";
import AddPartnership from "./docs/AddPartnership";
import { useRouter } from "next/navigation";
import ActionsButton from "@/components/ActionsButton";
import React from "react";
import DeletePartnershipModal from "./components/DeletePartnershipModal";
import ListHeader from "@/components/ListHeader";

type Partnership = {
  id: number;
  name: string;
  status: string;
};

export default function Home() {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedPartnershipId, setSelectedPartnershipId] = React.useState<
    number | null
  >(null);
  const [value, setValue] = React.useState("");

  // Function that handles the visibility of delete modal, attached to ActionsButton.tsx
  const handleDeleteButton = (id: number) => {
    setSelectedPartnershipId(id);
    setValue("");
    setIsOpen(true);
  };

  // Function that redirects the user to the selected TP
  const handleEditButton = (id: number) => {
    partnerships.map((partnership) => {
      if (partnership.id === id) {
        router.push(`/Cliente/${partnership.name}`);
      }
    });
  };

  // #TODO: Change to actual DB call
  const [partnerships, setPartnerships] = React.useState<Partnership[]>([
    { id: 1, name: "Amazon", status: "Complete" },
    { id: 2, name: "Walmart", status: "In Process" },
    { id: 3, name: "Partner X", status: "Unknown" },
    { id: 4, name: "Partner y", status: "Failed" },
    { id: 5, name: "Amazon", status: "Complete" },
    { id: 6, name: "Walmart", status: "In Process" },
    { id: 7, name: "Partner X", status: "Complete" },
    { id: 8, name: "Partner y", status: "Failed" },
    { id: 9, name: "Amazon", status: "Complete" },
    { id: 10, name: "Walmart", status: "In Process" },
    { id: 11, name: "Partner X", status: "Complete" },
    { id: 12, name: "Partner y", status: "Failed" },
    { id: 13, name: "Amazon", status: "Complete" },
    { id: 14, name: "Walmart", status: "In Process" },
    { id: 15, name: "Partner X", status: "Complete" },
  ]);

  const selectedPartnership = partnerships.find(
    (partnerships) => partnerships.id === selectedPartnershipId,
  );

  const [temporalPartnerships, setTemporalPartnersips] =
    React.useState(partnerships);

  const deleteTemporalPartnership = (id: number | null) => {
    const newPartnerships = temporalPartnerships.filter(
      (partnership) => partnership.id !== id,
    );
    setTemporalPartnersips(newPartnerships);
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  // #FIXME: change this function to controllers.
  // This functions must delete an item from the database
  function deleteDatabasePartnership() {
    setIsOpen(false);
    deleteTemporalPartnership(selectedPartnershipId);
    const newPartnerships = partnerships.filter(
      (partnerhip) => partnerhip.id !== selectedPartnershipId,
    );
    setPartnerships(newPartnerships);
  }

  function handlePartnershipRedirect(id: number) {
    partnerships.map((partnership) => {
      if (partnership.id === id) {
        router.push(`/Cliente/${partnership.name}`);
      }
    });
  }

  return (
    <div className="h-full flex flex-col ">
      <div className="w-full mt-1 justify-end flex">
        <AddPartnership />
      </div>
      <BrakeRule />
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
        {partnerships.map((partnership, index) => (
          <ListItem
            key={index}
            onClick={() => handlePartnershipRedirect(partnership.id)}
          >
            <div className="basis-8/12">
              <p>{partnership.name} </p>
            </div>
            <div className="basis-2/12 flex justify-center">
              <Badge status={partnership.status} />
            </div>
            <div className="basis-2/12 flex justify-center">
              <ActionsButton
                itemId={partnership.id}
                handleDeleteButton={() => handleDeleteButton(partnership.id)}
                handleEditButton={handleEditButton}
              />
            </div>
          </ListItem>
        ))}
      </div>
      <DeletePartnershipModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleChange={handleChange}
        selectedPartnership={selectedPartnership}
        deleteDatabasePartnership={deleteDatabasePartnership}
        value={value}
      />
    </div>
  );
}
