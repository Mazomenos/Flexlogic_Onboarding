import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full border border-base-200 bg-base-100 px-3 py-2 text-sm ring-offset-info-content file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info-content focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-darkMode-base-300 dark:bg-darkMode-base-200 dark:ring-offset-darkMode-base-200 dark:placeholder:text-darkMode-foreground/40 dark:focus-visible:ring-darkMode-info-content",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
