export default function CancelButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="border-2 border-transparent relative h-10 min-w-32 bg-info dark:bg-darkMode-info text-info-content dark:text-darkMode-info-content hover:bg-transparent dark:hover:bg-transparent hover:text-info-content  hover:border-info dark:hover:border-darkMode-info-content flex justify-center items-center transition motion-reduce:transition-none motion-reduce:hover:transform-none"
      onClick={onClick}
    >
      <div className=" "> Cancel </div>
    </button>
  );
}
