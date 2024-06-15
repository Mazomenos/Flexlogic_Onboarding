import React from "react";

export default function ListHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <li className="relative bg-info/30 dark:bg-darkMode-info border-base-300 w-[97%] flex  justify-between items-center flex-row place-items-start mx-1 my-2 px-8 shadow-[0px_0px_10px_1px_#00000024] dark:shadow-[0px_0px_10px_1px_#dadee610] border-1 text-xl py-3">
      {children}
    </li>
  );
}
