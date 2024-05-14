export default function AddButton({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
    return (
        <div className="flex justify-end">
            <button className="w-56 h-12 border bg-primary text-black hover:bg-white hover:text-[#99CEFF] hover:border-primary hover:border-2 font-bold rounded-md" onClick={onClick}>
                <div className="flex justify-center items-center"> {children} </div>
            </button>
        </div>
    );
}
