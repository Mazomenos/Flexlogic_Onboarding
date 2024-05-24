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
          ? "cursor-pointer dark:bg-red-800 w-[97%] flex bg-base-100 justify-between items-center flex-row place-items-start mx-1 my-2 px-8 shadow-[0px_0px_10px_1px_#00000024] 0 hover:bg-base-200 border-1 border-base-200 rounded-xl text-xl py-6"
          : "dark:bg-red-800 w-[97%] flex bg-base-100 justify-between items-center flex-row place-items-start mx-1 my-2 px-8 shadow-[0px_0px_10px_1px_#00000024] 0  border-base-200 rounded-xl text-xl py-6"
      }
    >
      {children}
    </li>
  );
}
