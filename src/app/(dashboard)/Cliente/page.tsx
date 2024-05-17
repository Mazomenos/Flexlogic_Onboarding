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
    { id: 3, name: "Partner X", status: "Complete" },
    { id: 4, name: "Partner y", status: "Failed" },
  ];

  const handleAddPartner = () => {
    console.log("Add Partnership");
  }

  return (
    <main>
      <div className="w-full justify-end flex">
        <AddButton onClick={() => handleAddPartner()}> Add Partnership + </AddButton>
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
