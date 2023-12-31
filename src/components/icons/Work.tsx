import * as React from "react";

const WorkIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="32"
      height="26"
      viewBox="0 0 32 26"
      fill="none"
          xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 0C11.3431 0 10 1.34315 10 3V4H3C1.34315 4 0 5.34315 0 7V9.768L15.228 13.828C15.7339 13.9627 16.2661 13.9627 16.772 13.828L32 9.768V7C32 5.34315 30.6569 4 29 4H22V3C22 1.34315 20.6569 0 19 0H13ZM13 2H19C19.5523 2 20 2.44772 20 3V4H12V3C12 2.44772 12.4477 2 13 2ZM3 26C1.34315 26 0 24.6569 0 23V11.7L15.742 15.894C15.911 15.9391 16.089 15.9391 16.258 15.894L32 11.7V23C32 24.6569 30.6569 26 29 26H3Z"
        fill="white"
      />
    </svg>
  );
};

export default WorkIcon;
