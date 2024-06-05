interface ButtonBProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export default function ButtonB({ children, onClick, className }: ButtonBProps) {
  return (
    <button
      className={(
        "text-base h-10 border-primary dark:border-darkMode-primary border-2 bg-info dark:bg-darkMode-primary text-info-content dark:text-darkMode-base-100 font-bold hover:bg-transparent dark:hover:bg-transparent hover:text-info-content/70 dark:hover:text-darkMode-primary hover:border-primary dark:hover:border-darkMode-primary transition motion-reduce:transition-none motion-reduce:hover:transform-none " + className
      )}
      onClick={onClick}
    >
      <div> {children} </div>
    </button>
  );
}
