import { FaPencil } from "react-icons/fa6";

export default function EditButton() {
  return (
    <button className="size-1/12 h-10 border bg-[#D1E9FF] text-black hover:bg-white hover:text-[#B8DDFF] hover:border-[#B8DDFF] font-bold  rounded-md flex justify-center items-center">
      <FaPencil />
      <div className="ml-2"> Edit </div>
    </button>
  );
}