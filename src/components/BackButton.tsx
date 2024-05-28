export default function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="bg-base-100 dark:bg-darkMode-base-200 text-primary-content dark:text-darkMode-foreground hover:bg-success dark:hover:bg-darkMode-success hover:text-success-content dark:hover:text-darkMode-success-content justify-center items-center p-2 rounded-full transition motion-reduce:transition-none motion-reduce:hover:transform-none shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
