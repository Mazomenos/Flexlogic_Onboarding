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

type Partnership = {
  id: number;
  name: string;
  status: string;
};

export default function Home() {
  const router = useRouter();

  // TODO: Change to actual DB call
  const partnerships: Partnership[] = [
    { id: 1, name: "Amazon", status: "Complete" },
    { id: 2, name: "Walmart", status: "In Process" },
    { id: 3, name: "Partner X", status: "Unknown" },
    { id: 4, name: "Partner y", status: "Failed" },
    { id: 5, name: "Amazon", status: "Complete" },
    { id: 6, name: "Walmart", status: "In Process" },
    { id: 7, name: "Partner X", status: "Complete" },
    { id: 8, name: "Partner y", status: "Failed" },
    { id: 9, name: "Amazon", status: "Complete" },
    { id: 10, name: "Walmart", status: "In Process" },
    { id: 11, name: "Partner X", status: "Complete" },
    { id: 12, name: "Partner y", status: "Failed" },
    { id: 13, name: "Amazon", status: "Complete" },
    { id: 14, name: "Walmart", status: "In Process" },
    { id: 15, name: "Partner X", status: "Complete" },
  ];

  function handlePartnershipRedirect(id: number) {
    partnerships.map((partnership) => {
      if (partnership.id === id) {
        router.push(`/Cliente/${partnership.name}`);
      }
    });
    
  }

  return (
    <div className="h-full flex flex-col ">
      <div className="w-full mt-1 justify-end flex">
        <AddPartnership />
      </div>
      <BrakeRule />
      <div className="max-h-full flex flex-col items-center w-full overflow-y-auto overscroll-none">
        {partnerships.map((partnership, index) => (
          <ListItem
            key={index}
            path={partnership.id.toString()}
            onClick={() => handlePartnershipRedirect(partnership.id)}
          >
            <p>{partnership.name} </p>
            <Badge status={partnership.status} />
          </ListItem>
        ))}
      </div>
    </div>
  );
}
