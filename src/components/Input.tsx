import * as React from "react";

interface Props {
  placeholder?: string;
  className?: string;
}

const input = ({ placeholder, className }: Props) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`border border-sandyAccent rounded-md h-12 px-4 pt-[9px] pb-[7px] ${className}`}
    />
  );
};

export default input;
