import * as React from "react";

const ClockIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7.5 3C7.77614 3 8 3.22386 8 3.5V8.71L11.248 10.566C11.4805 10.7063 11.5586 11.0064 11.4238 11.2422C11.2891 11.478 10.9909 11.5631 10.752 11.434L7.252 9.434C7.09622 9.34502 7.00006 9.1794 7 9V3.5C7 3.22386 7.22386 3 7.5 3Z"
        fill="#EF6D58"
      />
    </svg>
  );
};

export default ClockIcon;
