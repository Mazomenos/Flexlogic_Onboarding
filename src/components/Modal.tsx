import { Dialog, DialogPanel } from "@headlessui/react";
import CloseButton from "./CloseButton";

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
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex w-screen items-center justify-center p-4">
          <DialogPanel className="bg-base-100 dark:bg-darkMode-base-100 border-base-200 dark:border-darkMode-base-200 max-h-[90%] md:max-h-[90%] lg:max-h-[70%] xl:max-h-[60%] 2xl:max-h-[50%] relative w-full max-w-3xl  flex flex-col items-center overflow-y-auto overscroll-none border text-primary-content dark:text-darkMode-foreground p-12 pb-6">
            {children}
            <div className="absolute top-4 right-4">
              <CloseButton onClick={() => setIsOpen(false)} />{" "}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
