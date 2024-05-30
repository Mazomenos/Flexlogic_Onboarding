"use client";
import AddButton from "@/components/AddButton";
import BrakeRule from "@/components/BrakeRule";
import ListItem from "@/components/ListItem";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { useState } from "react";
import BackButton from "@/components/BackButton";
import { useRouter } from "next/navigation";
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ActionsButton from "../components/ActionsButton";

type EDI = {
    IdDoc: number;
    Doc: string;
    isVisible: boolean;
    isRequired: boolean;
};

export default function Home() {
    const router = useRouter();

    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [edi, setEdi] = useState<EDI[]>([
        { IdDoc: 1, Doc: "EDI 850 Purchase Order", isVisible: true, isRequired: true },
        { IdDoc: 2, Doc: "EDI 860 Purchase Order Change Request", isVisible: true, isRequired: false },
        { IdDoc: 3, Doc: "EDI 855 Purchase Order Acknowledgment", isVisible: true, isRequired: true },
        { IdDoc: 4, Doc: "EDI 856 Ship Notice/Manifest", isVisible: true, isRequired: true },
        { IdDoc: 5, Doc: "EDI 820 Payment Order/Remittance Advice", isVisible: true, isRequired: false },
    ]);

    const downloadPOTest = () => {
        console.log("Descargado");
    };

    const handleRequired = (id: number) => {
        setEdi((prevEdi) =>
            prevEdi.map((doc) =>
                doc.IdDoc === id ? { ...doc, isRequired: !doc.isRequired } : doc
            )
        );
    };

    const handleVisible = (id: number) => {
        setEdi((prevEdi) =>
            prevEdi.map((doc) =>
                doc.IdDoc === id ? { ...doc, isVisible: !doc.isVisible } : doc
            )
        );
    };

    const handleDeleteButton = (id: number) => {
        setEdi((prevEdi) => prevEdi.filter((doc) => doc.IdDoc !== id));
    };

    return (
        <div className="h-full flex flex-col">
            <div className="relative flex justify-center md:justify-end">
                <div className="absolute top-1 left-0">
                    <BackButton
                        onClick={() => {
                            router.back();
                        }}
                    />
                </div>
                <AddButton onClick={() => downloadPOTest()}>
                    Add Document +
                </AddButton>
            </div>
            <BrakeRule />
            <div className="max-h-full flex flex-col items-center w-full overflow-y-auto overscroll-none">
                <ListItem>
                    <div className="flex flex-row w-full items-center">
                        <p className="basis-2/5">Documents</p>
                        <p className="basis-1/5 grid justify-items-center content-center">Mandatory</p>
                        <p className="basis-1/5 grid justify-items-center content-center">Visible</p>
                        <p className="basis-1/5 grid justify-items-center content-center">Actions</p>
                    </div>
                </ListItem>
                {edi.map((Docs, index) => (
                    <ListItem key={index} >
                        <div className="flex flex-row w-full items-center">
                            <p className="basis-2/5">{Docs.Doc} </p>
                            <div className="basis-1/5 grid justify-items-center content-center">
                                <button onClick={() => handleRequired(Docs.IdDoc)}>
                                    {Docs.isRequired ? (
                                        <FaEye size={24} />
                                    ) : (
                                        <FaEyeSlash size={24} />
                                    )}
                                </button>
                            </div>
                            <div className="basis-1/5 grid justify-items-center">
                                <button onClick={() => handleVisible(Docs.IdDoc)}>
                                    {Docs.isVisible ? (
                                        <MdOutlineCheckBox size={24} />
                                    ) : (
                                        <MdOutlineCheckBoxOutlineBlank size={24} />
                                    )}
                                </button>
                            </div>
                            <div className="basis-1/5 flex justify-center">
                                <ActionsButton
                                    itemId={Docs.IdDoc}
                                    handleClick={handleDeleteButton}
                                />
                            </div>
                        </div>
                    </ListItem>
                ))}
            </div>
        </div>
    );
}
