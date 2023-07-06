import * as React from "react";

const CheckmarkIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-check"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      stroke-width={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M5 12l5 5l10 -10"></path>
    </svg>
  );
};

export default CheckmarkIcon;
