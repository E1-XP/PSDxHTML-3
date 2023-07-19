import * as React from "react";

const ArrowDown = ({ className }: { className?: string }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.0454 21.14L10.2494 15.658C9.68335 15.013 10.1434 14 11.0024 14H20.5944C20.987 13.9997 21.3435 14.2291 21.5058 14.5867C21.6681 14.9442 21.6061 15.3637 21.3474 15.659L16.5514 21.139C16.3615 21.3563 16.0869 21.481 15.7984 21.481C15.5098 21.481 15.2352 21.3563 15.0454 21.139V21.14Z"
        fill="white"
      />
    </svg>
  );
};

export default ArrowDown;
