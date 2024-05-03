export default function AddButton({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex justify-end">
            <button className="w-56 h-12 border bg-primary text-black hover:bg-white hover:text-primary hover:border-primary hover:border-2 font-bold rounded-md">
                <div className="flex justify-center items-center"> {children} </div>
            </button>
        </div>
    );
}