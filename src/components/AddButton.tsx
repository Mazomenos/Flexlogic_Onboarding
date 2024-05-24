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
        className="w-56 h-12 bg-info text-lg font-semibold text-info-content hover:bg-transparent hover:text-info hover:border-info hover:border-2 rounded-lg shadow"
        onClick={onClick}
      >
        <div className="flex justify-center items-center bold">{children} </div>
      </button>
    </div>
  );
}
