export default function LoginButton({ onClick }: { onClick: () => void }) {
    return (
        <div>
            <button
                className="bg-[#FFCF52] font-bold w-full text-darkMode-base-100 p-2 rounded mt-4 md:text-lg sm:text-sm hover:bg-transparent hover:ring-[#FFCF52] hover:ring-2 dark:hover:text-[#FFCF53] transition motion-reduce:transition-none motion-reduce:hover:transform-none"
                onClick={onClick}
            >
                <div>
                    Continue
                </div>
            </button>
        </div>
    );
}
