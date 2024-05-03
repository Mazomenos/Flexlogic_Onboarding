export default function Header({ children }: { children: React.ReactNode }) {
    return (
        <div className="pt-4">
            <div className="bg-white mr-6 ml-6 rounded-md h-20 flex justify-center items-center">
                <div className="text-4xl font-bold"> {children} </div>
            </div>
        </div>
    );
}