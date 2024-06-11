"use client";
import React, { useState } from "react";
import BrakeRule from "@/components/BrakeRule";
import ListItem from "@/components/ListItem";
import Modal from "@/components/Modal";
import { DialogTitle } from "@headlessui/react";
import AddPartner from "./components/AddPartner";
import { TrashIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import PartnersList from "./components/PartnersList";
import ListHeader from "@/components/ListHeader";
import { useEffect } from "react";
import { GetAllTradingPartner, DeleteTradingPartner, UpdateTradingPartner } from "@/DA/tradingPartnerControllers";

export type TradingPartnerCard = {
  id: string;
  Name: string,
  isVisible: boolean
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedPartnershipId, setSelectedPartnershipId] = React.useState<
    string
  >("");
  const [value, setValue] = React.useState("");

  const router = useRouter();



  const [TradingPartners, setTradingPartners] = React.useState<TradingPartnerCard[]>([])

  // Created a 'Mirror' list of TP, this will prevent db calls when a user changes visibility
  // and will only update in database once the user selects save button.
  const [temporalPartners, setTemporalPartners] = React.useState<TradingPartnerCard[]>([]);

  //Async GET PARTNERS
  const getAllTP = async () => {
    try {
      const response = await GetAllTradingPartner()

      if (response) {
        const data = await response;
        console.log(data)
        if (data) {
          setTradingPartners(data)
          setTemporalPartners(data)
        }
      }
    } catch (error) {
      console.log(error)
    } finally {
          setIsLoading(false);
        }
  }

  useEffect(() => {
    getAllTP()
  }, [])



  // Function that sets the selected partnership into a state
  const selectedPartnership = TradingPartners.find(
    (TradingPartners) => TradingPartners.id === selectedPartnershipId,
  );

  // This function deletes an item from the 'Mirror' temporal partners list, so the user does not need to refresh the page
  // to see the list without the items.
  const deleteTemporalPartner = (id: string | null) => {

    const newPartners = temporalPartners.filter((partner) => partner.id !== id);
    setTemporalPartners(newPartners);
  };

  // #FIXME: change this function to controllers.
  // This functions must delete an item from the database
  async function deleteDatabasePartner() {
    setIsOpen(false);

     //Agregar funcion async DELETE

     try {
      const del = await DeleteTradingPartner(selectedPartnershipId)

      if (del) {
        const data = await del;
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }

    deleteTemporalPartner(selectedPartnershipId);
    /*
    const newTradingPartners = TradingPartners.filter(
      (partner) => partner.id !== selectedPartnershipId,
    );
    setTradingPartners(newTradingPartners);
    */
  }

  // Handler that check's delete modal value
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  // Function that handles the visibility of delete modal, attached to ActionsButton.tsx
  const handleDeleteButton = (id: string) => {
    setSelectedPartnershipId(id);
    setValue("");
    setIsOpen(true);
  };

  // Function that redirects the user to the selected TP
  const handleEditButton = (id: string) => {
    TradingPartners.map((partner) => {
      if (partner.id === id) {
        router.push(`/Admin/${partner.Name}`);
      }
    });
  };

  return (
    <div className="h-full flex flex-col">
      <div className="relative flex justify-center md:justify-end">
        <AddPartner />
      </div>
      <BrakeRule />
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
      <div className="max-h-full flex flex-col items-center w-full overflow-y-auto overscroll-none">
        <ListHeader>
          <div className="flex flex-row w-full items-center">
            <p className="basis-3/6">Trading Partner</p>
            <p className="basis-2/6 grid justify-items-center content-center">
              Visible
            </p>
            <p className="basis-1/6 grid justify-items-center content-center">
              Actions
            </p>
          </div>
        </ListHeader>

        <div className="max-h-full flex flex-col items-center w-full overflow-y-auto overscroll-none">
          <PartnersList
            temporalPartners={temporalPartners}
            setTemporalPartners={setTemporalPartners}
            handleDeleteTemporalPartner={deleteTemporalPartner}
            handleEditButton={handleEditButton}
            handleDeleteButton={handleDeleteButton}
            Partners={TradingPartners}
          />
        </div>
      </div>
      )}
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <DialogTitle className="text-2xl">Delete Partner</DialogTitle>
        <DialogTitle className="text-xl">
          {selectedPartnership?.Name}
        </DialogTitle>
        <p>
          To confirm, please type &quot;
          <span className="font-bold select-none">{selectedPartnership?.Name}</span>
          &quot; in the box below
        </p>
        <div className="my-3" />
        <div className="w-3/4 flex-col flex justify-center">
          <input
            value={value}
            onChange={handleChange}
            placeholder={`Please type ${selectedPartnership?.Name} to confirm`}
            className="w-full outline-none text-lg placeholder:text-primary-content/40 dark:placeholder:text-darkMode-foreground/40 p-3 bg-inherit border-2 rounded-md appearance-none border-error dark:border-darkMode-error focus:bg-base-200 dark:focus:bg-darkMode-base-200"
            type="text"
            name="name"
          />
          <div className="my-3" />
          <button
            className="disabled:bg-base-300/30 dark:disabled:bg-darkMode-base-300/30 dark:disabled:border-darkMode-foreground/30 disabled:cursor-not-allowed disabled:text-primary-content/30 dark:disabled:text-darkMode-foreground/30 font-bold border-2 enabled:border-error dark:enabled:border-darkMode-error enabled:hover:bg-transparent dark:enabled:hover:bg-transparent enabled:text-error-content/70 dark:enabled:text-darkMode-error-content enabled:bg-error dark:enabled:bg-darkMode-error h-12 transition motion-reduce:transition-none motion-reduce:hover:transform-none rounded"
            disabled={value === selectedPartnership?.Name ? false : true}
            onClick={deleteDatabasePartner}
          >
            <div className="flex relative justify-center flex-row items-center">
              <TrashIcon className="size-6 absolute left-2" />
              Delete this partner
            </div>
          </button>
        </div>
      </Modal>
    </div>
  );
}
