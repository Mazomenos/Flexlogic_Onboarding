"use client";
interface IListItem {
  children: React.ReactNode;
  id?: number;
  path?: string;
  onClick?: () => void;
}

export default function ListItem({ children, id, path, onClick }: IListItem) {
  return (
    <li
      onClick={() => {
        path && onClick && onClick();
      }}
      key={id}
      className={
        path
          ? "relative cursor-pointer bg-base-100 dark:bg-darkMode-base-100 hover:bg-base-200 dark:hover:bg-darkMode-base-200 border-base-300 w-[97%] flex  justify-between items-center flex-row place-items-start mx-1 my-2 px-8 shadow-[0px_0px_10px_1px_#00000024] dark:shadow-[0px_0px_10px_1px_#dadee610] border-1 text-xl py-6 transition motion-reduce:transition-none motion-reduce:hover:transform-none"
          : "relative bg-base-100 dark:bg-darkMode-base-100 border-base-300 w-[97%] flex  justify-between items-center flex-row place-items-start mx-1 my-2 px-8 shadow-[0px_0px_10px_1px_#00000024] dark:shadow-[0px_0px_10px_1px_#dadee610] border-1 text-xl py-6"
      }
    >
      {children}
    </li>
  );
}
