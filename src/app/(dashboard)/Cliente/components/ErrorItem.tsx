import React from "react";

interface IError {
  title: string;
  children: React.ReactNode;
  type: string;
}

export default function ErrorItem({ title, children, type }: IError) {
  return (
    <li className="list-none flex h-full justify-center">
      <div className="collapse bg-base-100 dark:bg-darkMode-base-100 hover:bg-base-200 dark:hover:bg-darkMode-base-200 shadow-[0px_0px_10px_1px_#00000024] dark:shadow-[0px_0px_10px_1px_#dadee610] transition motion-reduce:transition-none motion-reduce:hover:transform-none p-2 rounded-none my-2 w-[97%]">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <p className="text-error-content/50 dark:text-darkMode-foreground/90">
            <span className="font-bold text-error-content/80 dark:text-darkMode-error-content">
              {type} Error:
            </span>{" "}
            {title}{" "}
          </p>
        </div>
        <div className="collapse-content">
          <p className="text-error-content/50 dark:text-darkMode-foreground">
            {children}
          </p>
        </div>
      </div>
    </li>
  );
}
