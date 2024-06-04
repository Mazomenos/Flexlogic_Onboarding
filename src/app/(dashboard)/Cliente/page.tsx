/*
 * Main page of client, here the client user can visualize
 * Partnerships and their respective states.
 * They can also click Add Partnership button to start the add partnership process.
 */

"use client";
import BrakeRule from "@/components/BrakeRule";
import ListItem from "@/components/ListItem";
import Badge from "./components/Badge";
import AddPartnership from "./docs/AddPartnership";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { GetUsersPartnerInfo } from "@/DA/usersTpControllers";


type Partnership = {
  idPartner: string;
  Name: string;
  Status: string;
};

export default function Home() {
  const router = useRouter();
  const [TPInfo, setTPInfo] = useState<Partnership[] | null>(null);

  // gets client partnership information
  const getTPInfo = async () => {
    try {
      const response = await GetUsersPartnerInfo("665a0753b9c7af2580bc0ad5")

      if (response) {
        const data = await response;
        console.log(data)
        if (data) setTPInfo(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTPInfo()
  }, [])

  function handlePartnershipRedirect(path: string) {
    router.push(`/Cliente/${path}`);
  }

  return (

    <div className="h-full flex flex-col ">

      <div className="w-full mt-1 justify-end flex">
        <AddPartnership />
      </div>

      <BrakeRule />

      {/* Maps client current partnerships */}
      <div className="max-h-full flex flex-col items-center w-full overflow-y-auto overscroll-none">
        {TPInfo && TPInfo.map((partnership, index) => (
          <ListItem
            key={index}
            path={partnership.Name}
            onClick={() => handlePartnershipRedirect(partnership.Name)}
          >
            <p>{partnership.Name} </p>
            <Badge status={partnership.Status} />
          </ListItem>
        ))}
      </div>

    </div>
  );
}
