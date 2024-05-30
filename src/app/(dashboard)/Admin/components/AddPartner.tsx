"use client";

import { DialogTitle } from "@headlessui/react";
import Modal from "@/components/Modal";
import React from "react";
import BrakeRule from "@/components/BrakeRule";
import AddButton from "@/components/AddButton";
import { useRouter } from "next/navigation";
import ButtonB from "./ButtonB";

export default function AddPartner() {
    const router = useRouter();

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <div className="w-full flex justify-end mt-1">
                <AddButton onClick={() => setIsOpen(true)}>Add Partner +</AddButton>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <DialogTitle className="text-2xl">Create Partner</DialogTitle>
                <BrakeRule classname="my-3" />
                <div className="w-full overflow-y-scroll">
                    <form className="space-y-6">
                        <div className="flex flex-col">
                            <label htmlFor="partnerName">
                                Partner Name
                            </label>
                            <input
                                type="text"
                                id="partnerName"
                                name="partnerName"
                                placeholder="Write the partner's name"
                                className="appearance-none p-2 border-b-2 border-primary-content/50 dark:border-darkMode-foreground/60 dark:bg-transparent focus:border-blue-300 dark:focus:border-info-content focus:outline-none focus:border-b-2"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="urlImage">
                                URL Image
                            </label>
                            <input
                                type="text"
                                id="urlImage"
                                name="urlImage"
                                placeholder="Write the URL of the image"
                                className="p-2 border-b-2 border-primary-content/50 dark:border-darkMode-foreground/60 dark:bg-transparent focus:border-blue-300 dark:focus:border-info-content focus:outline-none focus:border-primary-content/50 focus:border-b-2"
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label htmlFor="delimiters">
                                    Delimiters
                                </label>
                                <select
                                    id="delimiters"
                                    name="delimiters"
                                    className="p-2 border-b-2 border-primary-content/50 dark:border-darkMode-foreground/60 dark:bg-transparent focus:border-blue-300 dark:focus:border-info-content focus:outline-none focus:border-primary-content/50 focus:border-b-2"
                                >
                                    <option value="">Choose delimiters</option>
                                    <option value=",">Comma (,)</option>
                                    <option value=";">Semicolon (;)</option>
                                    <option value="|">Pipe (|)</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="ediVersion">
                                    EDI Version
                                </label>
                                <select
                                    id="ediVersion"
                                    name="ediVersion"
                                    className="p-2 border-b-2 border-primary-content/50 dark:border-darkMode-foreground/60 dark:bg-transparent focus:border-blue-300 dark:focus:border-info-content focus:outline-none focus:border-primary-content/50 focus:border-b-2"
                                >
                                    <option value="">Choose EDI version</option>
                                    <option value="4010">X12 4010</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label htmlFor="eol">
                                    EOL
                                </label>
                                <select
                                    id="eol"
                                    name="eol"
                                    className="p-2 border-b-2 border-primary-content/50 dark:border-darkMode-foreground/60 dark:bg-transparent focus:border-blue-300 dark:focus:border-info-content focus:outline-none focus:border-primary-content/50 focus:border-b-2"
                                >
                                    <option value="">Choose EOL</option>
                                    <option value="LF"> ~ </option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <div className="pt-6">
                                    <ButtonB onClick={() => setIsOpen(false)} className=" w-full">
                                        Business Rules
                                    </ButtonB>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <ButtonB onClick={() => setIsOpen(false)} className=" w-full">
                                Create
                            </ButtonB>
                        </div>
                    </form>

                </div>
            </Modal>
        </>
    );
}