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
          <DialogPanel className="max-w-1/2 w-2/5 h-1/2 flex flex-col items-center overflow-y-auto overscroll-none border border-base-200 text-primary-content bg-base-100 p-12 rounded-xl">
            {children}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
