"use client"
import { useState } from "react";
import AddButton from "@/components/AddButton";
import BrakeRule from "@/components/BrakeRule";
import ListItem from "@/components/ListItem";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AiOutlineMore } from "react-icons/ai";

export default function Home() {
    const [partners, setPartners] = useState([
        { id: 1, image: "https://res.cloudinary.com/daoth80ez/image/upload/v1715896301/Media/mu6zkbsr9lfqeq9nvwls.png", companyName: "Amazon", ediDoc: ["850", "855", "810", "860"], visible: true },
        { id: 2, image: "https://res.cloudinary.com/daoth80ez/image/upload/v1715896301/Media/dgf2ebuyc3xbrohuwzep.svg", companyName: "Walmart", ediDoc: ["850", "855", "810", "860"], visible: true },
        { id: 3, image: "https://res.cloudinary.com/daoth80ez/image/upload/v1715896301/Media/oznp9xnvnzeclt8snqtr.png", companyName: "Autozone", ediDoc: ["850", "855", "810", "860"], visible: true }
    ]);

    const handleVisible = (id: number) => {
        setPartners((prevPartners) =>
            prevPartners.map((partner) =>
                partner.id === id ? { ...partner, visible: !partner.visible } : partner
            )
        );
    };

    const handleAddPartner = () => {
        console.log("Add Partner");
    }

    return (
        <main>
            <div>
                <AddButton onClick={handleAddPartner}> Add Partner + </AddButton>
            </div>
            <BrakeRule />
            {partners.map((partner) => (
                <ListItem key={partner.id}>
                    <div className="flex flex-row w-full justify-center">
                        <div className="basis-1/12 grid justify-items-center content-center">
                            <img src={partner.image} alt={partner.companyName} className="max-h-16" />
                        </div>
                        <p className="basis-2/6 grid justify-items-center content-center">{partner.companyName}</p>
                        <p className="basis-2/6 grid justify-items-center content-center">EDI Documents: {partner.ediDoc.join(", ")}</p>
                        <button className="basis-1/6 grid justify-items-center content-center" onClick={() => handleVisible(partner.id)}>
                            {partner.visible ? <FaEye size={24}/> : <FaEyeSlash size={24}/>}
                        </button>
                        <div className="basis-1/12 grid justify-items-center content-center">
                            <AiOutlineMore size={32}/>
                        </div>
                    </div>
                </ListItem>
            ))}
        </main>
    );
}
