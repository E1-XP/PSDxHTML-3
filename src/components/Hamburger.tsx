import * as React from "react";

interface Props {
  className?: string;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

const Hamburger = ({ className, isOpen, setIsOpen }: Props) => {
  return (
    <button
      className={`h-12 w-12 p-4 rounded-lg border border-buttonOutline flex flex-col items-center justify-center gap-1 ${className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span
        className={`bg-white h-[2px] w-full rounded block transition ${
          isOpen ? "rotate-45 translate-y-[6px]" : ""
        }`}
      ></span>
      <span
        className={`bg-white h-[2px] w-full rounded block transition ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`bg-white h-[2px] w-full rounded block transition ${
          isOpen ? "-rotate-45 -translate-y-[6px]" : ""
        }`}
      ></span>
    </button>
  );
};

export default Hamburger;
