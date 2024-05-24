"use client"

import { GetPartnershipsFromUser, PostPartnership, UpdatePartnership } from "@/DA/tradingPartnerControllers";
import { GetElement } from "@/DA/elementControllers";
import { GetSegment } from "@/DA/segmentControllers";
import { getTPDocsFromPartnership } from "@/DA/TpDocsController";


export default function Home() {
    const useController = async () => {
        console.log(await GetPartnershipsFromUser("664e7362e5bbc91ef71acf36"));
    }

    return (
        <main>
            <p>pagina Inicial</p>
            <button className="btn btn-primary" onClick={useController}>Button</button>
        </main>
    );
}