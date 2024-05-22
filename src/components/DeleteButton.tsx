import { GoTrash } from "react-icons/go";

export default function DeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="size-1/12 h-10 bg-error text-black hover:bg-transparent hover:text-brand-red hover:border-brand-red hover:border-2 rounded-md flex justify-center items-center" onClick={onClick}>
      <GoTrash />
      <div className="ml-2"> Delete </div>
    </button>
  );  
}