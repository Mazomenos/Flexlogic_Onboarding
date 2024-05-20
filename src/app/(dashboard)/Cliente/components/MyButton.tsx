export default function MyButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="size-1/12 h-10 bg-error text-black hover:bg-transparent hover:text-brand-red hover:border-brand-red hover:border-2 rounded-md flex justify-center items-center">
      <div className="ml-2"> Cancel </div>
    </button>
  );
}
