"use client";
import React from "react";
import BrakeRule from "@/components/BrakeRule";
import ListItem from "@/components/ListItem";
import Modal from "@/components/Modal";
import { DialogTitle } from "@headlessui/react";
import AddPartner from "./components/AddPartner";
import { TrashIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import PartnersList from "./components/PartnersList";

type Partner = {
  id: number;
  companyName: string;
  ediDoc: string[];
  visible: boolean;
};

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedPartnershipId, setSelectedPartnershipId] = React.useState<
    number | null
  >(null);
  const [value, setValue] = React.useState("");

  const router = useRouter();

  const [partners, setPartners] = React.useState([
    {
      id: 1,
      companyName: "Amazon",
      ediDoc: ["850", "855", "810", "860"],
      visible: true,
    },
    {
      id: 2,
      companyName: "Walmart",
      ediDoc: ["850", "855", "810", "860"],
      visible: true,
    },
    {
      id: 3,
      companyName: "Autozone",
      ediDoc: ["850", "855", "810", "860"],
      visible: true,
    },
  ]);

  // Created a 'Mirror' list of TP, this will prevent db calls when a user changes visibility
  // and will only update in database once the user selects save button.
  const [temporalPartners, setTemporalPartners] = React.useState(partners);

  // Function that sets the selected partnership into a state
  const selectedPartnership = partners.find(
    (partners) => partners.id === selectedPartnershipId,
  );

  // This function deletes an item from the 'Mirror' temporal partners list, so the user does not need to refresh the page
  // to see the list without the items.
  const deleteTemporalPartner = (id: number | null) => {
    const newPartners = temporalPartners.filter((partner) => partner.id !== id);
    setTemporalPartners(newPartners);
  };

  // #FIXME: change this function to controllers.
  // This functions must delete an item from the database
  function deleteDatabasePartner() {
    setIsOpen(false);
    deleteTemporalPartner(selectedPartnershipId);
    const newTradingPartners = partners.filter(
      (partner) => partner.id !== selectedPartnershipId,
    );
    setPartners(newTradingPartners);
  }

  // Handler that check's delete modal value
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  // Function that handles the visibility of delete modal, attached to ActionsButton.tsx
  const handleDeleteButton = (id: number) => {
    setSelectedPartnershipId(id);
    setValue("");
    setIsOpen(true);
  };

  // Function that redirects the user to the selected TP
  const handleEditButton = (id: number) => {
    partners.map((partner) => {
      if (partner.id === id) {
        router.push(`/Admin/${partner.companyName}`);
      }
    });
  };

  return (
    <div className="h-full flex flex-col">
      <div className="relative flex justify-center md:justify-end">
        <AddPartner />
      </div>
      <BrakeRule />
      <div className="max-h-full flex flex-col items-center w-full overflow-y-auto overscroll-none">
        <ListItem>
          <div className="flex flex-row w-full items-center">
            <p className="basis-3/6">Trading Partner</p>
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

        <div className="max-h-full flex flex-col items-center w-full overflow-y-auto overscroll-none">
          <PartnersList
            temporalPartners={temporalPartners}
            setTemporalPartners={setTemporalPartners}
            handleDeleteTemporalPartner={deleteTemporalPartner}
            handleEditButton={handleEditButton}
            handleDeleteButton={handleDeleteButton}
            Partners={partners}
          />
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <DialogTitle className="text-2xl">Delete Partner</DialogTitle>
        <DialogTitle className="text-xl">
          {selectedPartnership?.companyName}
        </DialogTitle>
        <p>
          To confirm, please type &quot;
          <span className="font-bold">{selectedPartnership?.companyName}</span>
          &quot; in the box below
        </p>
        <div className="my-3" />
        <div className="w-3/4 flex-col flex justify-center">
          <input
            value={value}
            onChange={handleChange}
            placeholder={`Please type ${selectedPartnership?.companyName} to confirm`}
            className="w-full outline-none text-lg placeholder:text-primary-content/40 dark:placeholder:text-darkMode-foreground/40 p-3 bg-inherit border-2 rounded-md appearance-none border-error dark:border-darkMode-error focus:bg-base-200 dark:focus:bg-darkMode-base-200"
            type="text"
            name="name"
          />
          <div className="my-3" />
          <button
            className="disabled:bg-base-300/30 dark:disabled:bg-darkMode-base-300/30 dark:disabled:border-darkMode-foreground/30 disabled:cursor-not-allowed disabled:text-primary-content/30 dark:disabled:text-darkMode-foreground/30 font-bold border-2 enabled:border-error dark:enabled:border-darkMode-error enabled:hover:bg-transparent dark:enabled:hover:bg-transparent enabled:text-error-content/70 dark:enabled:text-darkMode-error-content enabled:bg-error dark:enabled:bg-darkMode-error h-12 transition motion-reduce:transition-none motion-reduce:hover:transform-none rounded"
            disabled={value === selectedPartnership?.companyName ? false : true}
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
