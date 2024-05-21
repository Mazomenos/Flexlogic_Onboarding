export default function GenericButton({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
    return (
        <button className="size-4/12 h-10 bg-primary text-black hover:bg-transparent hover:text-brand-blue hover:border-primary hover:border-2 rounded-md" onClick={onClick}>
            <div className="flex justify-center items-center"> {children} </div>
        </button>
    );
}