export default function ValidateButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className="h-10 w-28 bg-info text-lg font-bold text-info-content transition motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-transparent hover:text-brand-blue hover:border-primary hover:border-2 rounded-md"
      onClick={onClick}
    >
      <div className=""> {children} </div>
    </button>
  );
}
