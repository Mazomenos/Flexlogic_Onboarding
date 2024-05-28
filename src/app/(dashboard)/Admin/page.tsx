"use client"
import { useState } from "react";
import BrakeRule from "@/components/BrakeRule";
import ListItem from "@/components/ListItem";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AiOutlineMore } from "react-icons/ai";

export default function Home() {
    const [partners, setPartners] = useState([
        { id: 1, image: "https://res.cloudinary.com/daoth80ez/image/upload/v1715896301/Media/mu6zkbsr9lfqeq9nvwls.png", companyName: "Amazon", ediDoc: ["850", "855", "810", "860"], visible: true },
        { id: 2, image: "https://res.cloudinary.com/daoth80ez/image/upload/v1715896301/Media/dgf2ebuyc3xbrohuwzep.svg", companyName: "Walmart", ediDoc: ["850", "855", "810", "860"], visible: true },
        { id: 3, image: "https://res.cloudinary.com/daoth80ez/image/upload/v1715896301/Media/oznp9xnvnzeclt8snqtr.png", companyName: "Autozone", ediDoc: ["850", "855", "810", "860"], visible: true },
        { id: 1, image: "https://res.cloudinary.com/daoth80ez/image/upload/v1715896301/Media/mu6zkbsr9lfqeq9nvwls.png", companyName: "Amazon", ediDoc: ["850", "855", "810", "860"], visible: true },
        { id: 2, image: "https://res.cloudinary.com/daoth80ez/image/upload/v1715896301/Media/dgf2ebuyc3xbrohuwzep.svg", companyName: "Walmart", ediDoc: ["850", "855", "810", "860"], visible: true },
        { id: 3, image: "https://res.cloudinary.com/daoth80ez/image/upload/v1715896301/Media/oznp9xnvnzeclt8snqtr.png", companyName: "Autozone", ediDoc: ["850", "855", "810", "860"], visible: true },
        { id: 1, image: "https://res.cloudinary.com/daoth80ez/image/upload/v1715896301/Media/mu6zkbsr9lfqeq9nvwls.png", companyName: "Amazon", ediDoc: ["850", "855", "810", "860"], visible: true },
        { id: 2, image: "https://res.cloudinary.com/daoth80ez/image/upload/v1715896301/Media/dgf2ebuyc3xbrohuwzep.svg", companyName: "Walmart", ediDoc: ["850", "855", "810", "860"], visible: true },
        { id: 3, image: "https://res.cloudinary.com/daoth80ez/image/upload/v1715896301/Media/oznp9xnvnzeclt8snqtr.png", companyName: "Autozone", ediDoc: ["850", "855", "810", "860"], visible: true },
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
        <div className="h-full flex flex-col ">
            
            <BrakeRule />
            <div className="max-h-full flex flex-col items-center w-full overflow-y-auto overscroll-none">
                {partners.map((partner) => (
                    <ListItem key={partner.id}>
                        <div className="flex flex-row w-full justify-center">
                            <div className="basis-1/12 grid justify-items-center content-center max-h-10 ">
                                <img src={partner.image} alt={partner.companyName} className="max-h-16" />
                            </div>
                            <p className="basis-2/6 grid justify-items-center content-center">{partner.companyName}</p>
                            <p className="basis-2/6 grid justify-items-center content-center">EDI Documents: {partner.ediDoc.join(", ")}</p>
                            <button className="basis-1/6 grid justify-items-center content-center" onClick={() => handleVisible(partner.id)}>
                                {partner.visible ? <FaEye size={24} /> : <FaEyeSlash size={24} />}
                            </button>
                            <button className="basis-1/12 grid justify-items-center content-center">
                                <AiOutlineMore size={32} />
                            </button>
                        </div>
                    </ListItem>
                ))}
            </div>
        </div >
    );
}
