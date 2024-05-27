export default function GenericButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className="h-10 w-36 bg-info text-info-content font-bold hover:bg-transparent hover:text-info-content/70 hover:border-primary hover:border-2"
      onClick={onClick}
    >
      <div className=""> {children} </div>
    </button>
  );
}
