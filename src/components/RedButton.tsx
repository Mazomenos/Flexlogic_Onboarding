import React, { Children } from "react";

export default function RedButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      className="p-2 w-36 h-10 bg-error text-black hover:bg-transparent hover:text-brand-red hover:ring-brand-red hover:ring-2 rounded-md"
      onClick={onClick}
    >
      <p> {children} </p>
    </button>
  );
}
