import { FaPencil } from "react-icons/fa6";

export default function EditButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="size-1/12 h-10 bg-primary text-black hover:bg-transparent hover:text-brand-blue hover:border-brand-blue hover:border-2 rounded-md flex justify-center items-center" onClick={onClick}>
      <FaPencil />
      <div className="ml-2"> Edit </div>
    </button>
  );
}