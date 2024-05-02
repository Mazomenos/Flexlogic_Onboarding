interface IListItem {
  children: React.ReactNode;
  id?: number;
}

export default function ListItem({ children, id }: IListItem) {
  return (
    <li
      key={id}
      className="flex bg-base-200 justify-between items-center flex-row place-items-start mx-1 my-2 w-full px-8 shadow-lg shadow-neutral-300 ring-1 ring-base-300 hover:bg-base-300 border border-transparent rounded py-6 dark:hover:bg-gray-700"
    >
      {children}
    </li>
  );
}
