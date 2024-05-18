export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 flex-auto flex flex-col">
      <div className="p-4 flex-1 border-2 bg-base-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg border-transparent">
        {children}
      </div>
    </div>
  );
}
