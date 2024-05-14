interface IListItem {
  children: React.ReactNode;
  id?: number;
}

export default function ListItem({ children, id }: IListItem) {
  return (
    <li
      key={id}
      className="flex bg-base-200 justify-between items-center flex-row place-items-start mx-1 my-4 w-full px-8 shadow-md  shadow-primary-content/20 hover:bg-base-300 border border-transparent rounded py-6"
    >
      {children}
    </li>
  );
}
