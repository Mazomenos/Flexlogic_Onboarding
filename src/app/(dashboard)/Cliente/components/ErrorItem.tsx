import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface IError {
  Title: string;
  children: React.ReactNode;
  Type: string;
  Position: string
}

export default function ErrorItem({ Title, children, Type, Position }: IError) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="list-none flex h-full justify-center">
      <div className="collapse bg-base-100 dark:bg-darkMode-base-100 hover:bg-base-200 dark:hover:bg-darkMode-base-200 shadow-[0px_0px_10px_1px_#00000024] dark:shadow-[0px_0px_10px_1px_#dadee610] transition motion-reduce:transition-none motion-reduce:hover:transform-none p-2 rounded-none my-2 w-[97%]">
        <input 
          type="checkbox" 
          className="hidden" 
          checked={isOpen} 
          onChange={() => setIsOpen(!isOpen)} 
        />
        <div 
          className="collapse-title text-xl font-medium flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-error-content/50 dark:text-darkMode-foreground/90 flex-1">
            <span className="font-bold text-error-content/80 dark:text-darkMode-error-content">
              {Type} {Position} Error: 
            </span>{" "}
            {Title}
          </p>
          <div className="text-error-content/50 dark:text-darkMode-foreground">
            {isOpen ? (
              <ChevronDownIcon className="h-6 w-6 transform rotate-180 transition-transform duration-100" />
            ) : (
              <ChevronDownIcon className="h-6 w-6 transition-transform duration-100" />
            )}
          </div>
        </div>
        {isOpen && (
          <div className="collapse-content">
            <p className="text-error-content/50 dark:text-darkMode-foreground">
              {children}
            </p>
          </div>
        )}
      </div>
    </li>
  );
}
