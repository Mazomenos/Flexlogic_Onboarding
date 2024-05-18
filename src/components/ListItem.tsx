"use client";
interface IListItem {
  children: React.ReactNode;
  id?: number;
  path?: string;
}

export default function ListItem({ children, id, path }: IListItem) {
  return (
    <li
      onClick={() => {
        path && console.log(path);
      }}
      key={id}
      className={
        path
          ? "cursor-pointer dark:bg-red-800 flex bg-base-100 justify-between items-center flex-row place-items-start mx-1 my-4 w-full px-8 shadow-[0px_0px_10px_1px_#00000024] 0 hover:bg-base-200 border-1 border-base-200 rounded-xl text-xl py-6"
          : "flex bg-base-200 justify-between items-center flex-row place-items-start mx-1 my-4 w-full px-8 shadow-md  shadow-primary-content/20 border border-transparent rounded py-6"
      }
    >
      {children}
    </li>
  );
}
