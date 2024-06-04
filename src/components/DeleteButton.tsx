import { GoTrash } from "react-icons/go";

export default function DeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="border-2 border-transparent relative h-10 min-w-32 bg-error dark:bg-darkMode-error text-error-content dark:text-darkMode-error-content hover:bg-transparent dark:hover:bg-transparent hover:text-error-content  hover:border-brand-red dark:hover:border-darkMode-error-content flex justify-center items-center transition motion-reduce:transition-none motion-reduce:hover:transform-none"
      onClick={onClick}
    >
      <GoTrash className="absolute left-3" />
      <div className=" ml-2"> Delete </div>
    </button>
  );
}
