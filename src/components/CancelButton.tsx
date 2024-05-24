export default function CancelButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="p-2 w-36 h-10 bg-error text-black hover:bg-transparent hover:text-brand-red hover:ring-brand-red hover:ring-2 rounded-md"
      onClick={onClick}
    >
      <div> Cancel </div>
    </button>
  )
}
