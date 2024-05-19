"use client";
import AddButton from "@/components/AddButton";
import BrakeRule from "@/components/BrakeRule";
import ListItem from "@/components/ListItem";
import Badges from "./components/Badges";

type Partnership = {
  id: number;
  name: string;
  status: string;
};

export default function Home() {
  // Aquí iría la llamada a las partnerships
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

  const handleAddPartner = () => {
    console.log("Add Partnership");
  };

  return (
    <main>
      <div className="w-full mt-1 justify-end flex">
        <AddButton onClick={() => handleAddPartner()}>
          + Add Partnership
        </AddButton>
      </div>
      <BrakeRule />
      {partnerships.map((partnership, index) => (
        <ListItem key={index} path={partnership.name}>
          <p>{partnership.name} </p>
          <Badges status={partnership.status} />
        </ListItem>
      ))}
    </main>
  );
}
