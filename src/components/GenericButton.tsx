export default function GenericButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className="h-10 text-base w-36 border-primary dark:border-darkMode-primary border-2 bg-info dark:bg-darkMode-primary text-info-content dark:text-darkMode-base-100 font-bold hover:bg-transparent dark:hover:bg-transparent hover:text-info-content/70  dark:hover:text-darkMode-primary hover:border-primary dark:hover:border-darkMode-primary transition motion-reduce:transition-none motion-reduce:hover:transform-none"
      onClick={onClick}
    >
      <div className=""> {children} </div>
    </button>
  );
}
