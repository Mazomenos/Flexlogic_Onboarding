export default function CancelButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="size-1/12 h-10 bg-error text-black hover:bg-transparent hover:text-brand-red hover:border-brand-red hover:border-2 rounded-md flex justify-center items-center" onClick={onClick}>
      <div className="ml-2"> Cancel </div>
    </button>
  );  
}