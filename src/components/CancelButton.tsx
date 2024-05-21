export default function CancelButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="size-4/12 p-2 h-10 bg-error text-black hover:bg-transparent hover:text-brand-red hover:ring-brand-red hover:ring-2 rounded-md flex justify-center items-center"
      onClick={onClick}
    >
      <div> Cancel </div>
    </button>
  );
}
