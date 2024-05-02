export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 min-h-screen flex flex-col">
      <div className="p-4 flex-1 h-full border-2 bg-base-100 dark:bg-gray-800 drop-shadow-lg rounded-lg border-transparent">
        {children}
      </div>
    </div>
  );
}
