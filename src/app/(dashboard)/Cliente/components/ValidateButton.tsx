export default function ValidateButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className="w-28 p-1 text-base bg-info dark:bg-darkMode-primary dark:hover:bg-transparent dark:text-darkMode-base-100 dark:hover:text-darkMode-primary font-bold text-info-content transition motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-transparent hover:text-brand-blue ring-2 ring-primary hover:ring-primary dark:ring-darkMode-primary hover:border-1"
      onClick={onClick}
    >
      <div className=""> {children} </div>
    </button>
  );
}
