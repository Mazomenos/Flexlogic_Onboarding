export default function AddButton({ children, onClick}: { children: React.ReactNode, onClick: () => void}) {
    return (
        <div>
            <button className="w-56 h-12 bg-primary text-black hover:bg-transparent hover:text-brand-blue hover:border-primary hover:border-2 rounded-md" onClick={onClick}>
                <div className="flex justify-center items-center"> {children} </div>
            </button>
        </div>
    );
}
