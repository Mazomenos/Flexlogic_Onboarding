export default function CancelButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="bg-error p-2 w-36 h-10  font-bold text-error-content hover:bg-transparent hover:text-error-content/70 hover:ring-brand-red hover:ring-2 "
      onClick={onClick}
    >
      <div className=" "> Cancel </div>
    </button>
  );
}
