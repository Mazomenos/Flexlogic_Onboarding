"use client"

import { GetPartnershipsFromUser, PostPartnership, UpdatePartnership } from "@/DA/tradingPartnerControllers";
import { GetElement } from "@/DA/elementControllers,";
import { GetSegment } from "@/DA/segmentControllers";


export default function Home() {
    const useController = async () => {
    }

    return (
        <main>
            <p>pagina Inicial</p>
            <button className="btn btn-primary" onClick={useController}>Button</button>
        </main>
    );
}