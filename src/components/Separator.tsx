import * as React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  asComponent?: boolean; // or as section otherwise
  wrapperClassName?: string;
  className?: string;
}

const SeparatorLine = ({ asComponent, wrapperClassName, className }: Props) => {
  return (
    <div className={twMerge(asComponent ? "" : "wrapper", wrapperClassName)}>
      <div className={twMerge("border-b border-sandyAccent", className)}></div>
    </div>
  );
};

export default SeparatorLine;
