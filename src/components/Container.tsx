export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 flex-auto flex flex-col">
      <div className="p-4 flex-1 border-2 bg-base-100 drop-shadow-lg rounded-lg border-transparent">
        {children}
      </div>
    </div>
  );
}
