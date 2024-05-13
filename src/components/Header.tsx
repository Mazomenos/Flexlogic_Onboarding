export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white shadow-md h-20 flex justify-center items-center">
      <div className="text-4xl font-bold"> {children} </div>
    </div>
  );
}
