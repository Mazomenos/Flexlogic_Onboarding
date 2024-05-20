import { Dialog, DialogPanel } from "@headlessui/react";

interface Props {
  children: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

export default function Modal({ children, setIsOpen, isOpen }: Props) {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border border-base-200 text-primary-content bg-base-100 p-12 rounded-xl">
            {children}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
