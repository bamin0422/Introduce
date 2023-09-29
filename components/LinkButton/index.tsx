import React from "react";

export interface LinkButtonProps {
  linkTo: string;
  children?: React.ReactNode;
}

export default function LinkButton({ linkTo, children }: LinkButtonProps) {
  return (
    <div className="mr-3">
      <button
        onClick={(e: { preventDefault: () => void }) => {
          window.location.href = linkTo;
        }}
      >
        {children}
      </button>
    </div>
  );
}
