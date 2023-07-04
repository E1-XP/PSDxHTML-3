import * as React from "react";

interface Props {
  asComponent?: boolean; // or as section otherwise
}

const SeparatorLine = ({ asComponent }: Props) => {
  return (
    <div className={asComponent ? "" : "wrapper"}>
      <div className="border-b border-sandyAccent "></div>
    </div>
  );
};

export default SeparatorLine;
