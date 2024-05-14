export default function SaveButton({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
    return (
        <button className="size-1/12 h-10 border bg-primary text-black hover:bg-white hover:text-[#99CEFF] hover:border-primary hover:border-2 font-bold rounded-md" onClick={onClick}>
            <div className="flex justify-center items-center"> {children} </div>
        </button>
    );
}