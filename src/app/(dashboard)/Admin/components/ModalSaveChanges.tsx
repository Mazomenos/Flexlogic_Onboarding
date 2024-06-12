import CancelButton from "@/components/CancelButton";
import DeleteButton from "@/components/DeleteButton";
import ExitButton from "@/components/ExitButton";
import Modal from "@/components/Modal";
import { DialogTitle } from "@headlessui/react";

type Props = {
  isModalOpen: boolean;
  setModalOpen: any;
  setDrawerOpen: any;
};

export default function ModalSaveChanges({
  isModalOpen,
  setModalOpen,
  setDrawerOpen,
}: Props) {
  return (
    <Modal isOpen={isModalOpen} setIsOpen={setModalOpen}>
      <DialogTitle className="text-2xl">Exit without save</DialogTitle>
      <div className="text-center">
        <p className="text-xl">
          You are about to exit without saving your changes, if you want to save
          them go back and create the document, otherwise select “Exit”.
        </p>
        <p className="mt-1 italic text-primary-content/40 dark:text-darkMode-foreground/40">
          {" "}
          *This action cannot be undone.
        </p>
      </div>
      <div className="my-3" />
      <div className="w-[60%] flex flex-col sm:flex-row justify-between">
        <CancelButton onClick={() => setModalOpen(false)} />
        <ExitButton
          onClick={() => {
            setModalOpen(false), setDrawerOpen(false);
          }}
        />
      </div>
    </Modal>
  );
}
