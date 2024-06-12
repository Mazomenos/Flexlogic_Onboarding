// Errors.tsx
"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import React from "react";
import BrakeRule from "@/components/BrakeRule";
import CloseButton from "@/components/CloseButton";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function SuccessModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex w-screen items-center justify-center p-4">
        <DialogPanel className="dark:background-success background-success bg-base-100 dark:bg-darkMode-base-100 relative w-full max-w-3xl flex flex-col items-center overflow-y-auto overscroll-none text-primary-content dark:text-darkMode-foreground p-12 pb-6">
          <div className="flex size-[200px]">
            <CheckCircleIcon className="text-white dark:text-darkMode-base-100" />
          </div>
          <BrakeRule classname="my-2" />
          <h1 className="text-4xl md:text-6xl text-primary-content dark:text-darkMode-foreground">
            Great!
          </h1>
          <p className="text-lg text-primary-content dark:text-darkMode-foreground">
            your document has been successfully validated
          </p>
          <BrakeRule classname="my-2" />
          <div className="bottom-4 w-full flex justify-center ">
            <button
              className="h-10 text-white font-bold w-36 border-[#62b47d]  border-2 bg-[#62b47d]   dark:text-darkMode-base-100 hover:bg-transparent dark:hover:bg-transparent hover:text-[#62b47d]  dark:hover:text-[#62b47d] hover:border-[#62b47d] dark:hover:border-[#62b47d] transition motion-reduce:transition-none motion-reduce:hover:transform-none"
              onClick={() => setIsOpen(false)}
            >
              Done
            </button>
          </div>

          <div className="absolute top-4 right-4">
            <button
              className="bg-[#62b47d] itext-primary-content dark:text-darkMode-foreground hover:bg-[#298c43] transition motion-reduce:transition-none motion-reduce:hover:transform-none justify-center items-center p-2 rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
                i
              >
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
