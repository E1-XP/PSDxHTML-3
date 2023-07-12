import * as React from "react";

interface Props {
  asComponent?: boolean; // or as section otherwise
  wrapperClassName?: string;
  className?: string;
}

const SeparatorLine = ({ asComponent, wrapperClassName, className }: Props) => {
  return (
    <div className={`${asComponent ? "" : "wrapper"} ${wrapperClassName}`}>
      <div className={`border-b border-sandyAccent ${className}`}></div>
    </div>
  );
};

export default SeparatorLine;
