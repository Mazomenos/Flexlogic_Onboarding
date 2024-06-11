import Modal from "@/components/Modal";
import { DialogTitle } from "@headlessui/react";
import { TrashIcon } from "@heroicons/react/24/outline";

type Partnership = {
  idPartner: string;
  Name: string;
  Status: string;
};

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleChange: any;
  selectedPartnership: Partnership | undefined | null;
  deleteDatabasePartnership: any;
  value: string;
};

export default function DeletePartnershipModal({
  isOpen,
  setIsOpen,
  handleChange,
  selectedPartnership,
  deleteDatabasePartnership,
  value,
}: Props) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <DialogTitle className="text-2xl">Delete Partner</DialogTitle>
      <DialogTitle className="text-xl">{selectedPartnership?.Name}</DialogTitle>
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
          onClick={deleteDatabasePartnership}
        >
          <div className="flex relative justify-center flex-row items-center">
            <TrashIcon className="size-6 absolute left-2" />
            Delete this partner
          </div>
        </button>
      </div>
    </Modal>
  );
}
