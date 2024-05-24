"use client"

import { GetPartnershipsFromUser, PostPartnership, UpdatePartnership } from "@/DA/tradingPartnerControllers";
import { GetElement } from "@/DA/elementControllers";
import { GetSegment } from "@/DA/segmentControllers";
import { GetTPDocsFromPartnership } from "@/DA/TpDocsController";


export default function Home() {
    const useController = async () => {
        console.log(await GetTPDocsFromPartnership("664d76a8d7412ac29ddf6a1b"));
    }

    return (
        <main>
            <p>pagina Inicial</p>
            <button className="btn btn-primary" onClick={useController}>Button</button>
        </main>
    );
}