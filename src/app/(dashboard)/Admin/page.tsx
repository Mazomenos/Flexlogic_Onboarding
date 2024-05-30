"use client";
import React from "react";
import BrakeRule from "@/components/BrakeRule";
import ListItem from "@/components/ListItem";
import ActionsButton from "./components/ActionsButton";
import Modal from "@/components/Modal";
import { DialogTitle } from "@headlessui/react";
import AddPartner from "./components/AddPartner";
import { TrashIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedPartnershipId, setSelectedPartnershipId] = React.useState<
    number | null
  >(null);
  const [value, setValue] = React.useState("");
  const [partners, setPartners] = React.useState([
    {
      id: 1,
      image:
        "https://res.cloudinary.com/daoth80ez/image/upload/v1715896301/Media/mu6zkbsr9lfqeq9nvwls.png",
      companyName: "Amazon",
      ediDoc: ["850", "855", "810", "860"],
      visible: true,
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/daoth80ez/image/upload/v1715896301/Media/dgf2ebuyc3xbrohuwzep.svg",
      companyName: "Walmart",
      ediDoc: ["850", "855", "810", "860"],
      visible: true,
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/daoth80ez/image/upload/v1715896301/Media/oznp9xnvnzeclt8snqtr.png",
      companyName: "Autozone",
      ediDoc: ["850", "855", "810", "860"],
      visible: true,
    },
  ]);

  const selectedPartnership = partners.find(
    (partners) => partners.id === selectedPartnershipId,
  );

  function onSubmit() {
    console.log("deleted");
  }

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleDeleteButton = (id: number) => {
    setSelectedPartnershipId(id);
    setValue("");
    setIsOpen(true);
  };

  const handleVisible = (id: number) => {
    setPartners((prevPartners) =>
      prevPartners.map((partner) =>
        partner.id === id ? { ...partner, visible: !partner.visible } : partner,
      ),
    );
  };

  return (
    <div className="h-full flex flex-col ">
      <AddPartner />
      <BrakeRule />
      <div className="max-h-full flex flex-col items-center w-full overflow-y-auto overscroll-none">
        {partners.map((partner) => (
          <ListItem key={partner.id}>
            <div className="flex flex-row w-full justify-center h-full">
              <div className="basis-1/12 grid justify-items-center content-center h-full ">
                <img
                  src={partner.image}
                  alt={partner.companyName}
                  className="max-h-16"
                />
              </div>
              <p className="basis-2/6 grid justify-items-center content-center">
                {partner.companyName}
              </p>
              <p className="basis-2/6 grid justify-items-center content-center">
                EDI Documents: {partner.ediDoc.join(", ")}
              </p>
              <button
                className="basis-1/6 grid justify-items-center content-center"
                onClick={() => handleVisible(partner.id)}
              >
                {partner.visible ? (
                  <EyeIcon className="size-8" />
                ) : (
                  <EyeSlashIcon className="size-8" />
                )}
              </button>
              <div className="basis-1/12 grid justify-items-center content-center">
                <ActionsButton
                  itemId={partner.id}
                  handleClick={handleDeleteButton}
                />
              </div>
            </div>
          </ListItem>
        ))}
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
        <form
          className="w-3/4 flex-col flex justify-center"
          onSubmit={onSubmit}
        >
          <input
            value={value}
            onChange={handleChange}
            placeholder={`Please type ${selectedPartnership?.companyName} to confirm`}
            className="w-full text-lg placeholder:text-primary-content/40 dark:placeholder:text-darkMode-foreground/40 p-3 bg-inherit border-2 rounded-md appearance-none border-error dark:border-darkMode-error focus:bg-base-200 dark:focus:bg-darkMode-base-200"
            type="text"
            name="name"
          />
          <div className="my-3" />
          <button
            className="disabled:bg-base-300/30 dark:disabled:bg-darkMode-base-300/30 dark:disabled:border-darkMode-foreground/30 disabled:cursor-not-allowed disabled:text-primary-content/30 dark:disabled:text-darkMode-foreground/30 font-bold border-2 enabled:border-error dark:enabled:border-darkMode-error enabled:hover:bg-transparent dark:enabled:hover:bg-transparent enabled:text-error-content/70 dark:enabled:text-darkMode-error-content enabled:bg-error dark:enabled:bg-darkMode-error h-12 transition motion-reduce:transition-none motion-reduce:hover:transform-none rounded"
            disabled={value === selectedPartnership?.companyName ? false : true}
            type="submit"
          >
            <div className="flex relative justify-center flex-row items-center">
              <TrashIcon className="size-6 absolute left-2" />
              Delete this partner
            </div>
          </button>
        </form>
      </Modal>
    </div>
  );
}
