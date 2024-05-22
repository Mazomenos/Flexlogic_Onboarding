export default function GenericButton({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button
      className="h-10 w-36 bg-primary text-black hover:bg-transparent hover:text-brand-blue hover:border-primary hover:border-2 rounded-md"
      onClick={onClick}
    >
      <div className=""> {children} </div>
    </button>
  )
}
