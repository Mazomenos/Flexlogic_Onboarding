export default function AddButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <div>
      <button
        className="w-56 h-12 bg-info dark:border-darkMode-primary dark:bg-darkMode-primary dark:hover:bg-transparent dark:text-darkMode-base-100 dark:hover:text-darkMode-primary text-lg font-semibold text-info-content hover:bg-transparent hover:text-info hover:border-info hover:border-2 shadow transition motion-reduce:transition-none motion-reduce:hover:transform-none"
        onClick={onClick}
      >
        <div className="flex justify-center items-center bold">{children} </div>
      </button>
    </div>
  );
}
