import { GoTrash } from "react-icons/go";

export default function DeleteButton() {
  return (
    <button className="size-1/12 h-10 border bg-[#FFD1D1] text-black hover:bg-white hover:text-[#FFA5A5] hover:border-[#FFA5A5] font-bold rounded-md flex justify-center items-center">
      <GoTrash />
      <div className="ml-2"> Delete </div>
    </button>
  );  
}