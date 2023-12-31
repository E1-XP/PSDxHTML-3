import * as React from "react";

const ArrowUp = ({ className }: { className?: string }) => {
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
        d="M15.247 10.8595L10.451 16.3405C9.88501 16.9875 10.345 17.9995 11.204 17.9995H20.796C21.1887 17.9999 21.5452 17.7704 21.7075 17.4128C21.8697 17.0553 21.8078 16.6359 21.549 16.3405L16.753 10.8605C16.5631 10.6432 16.2886 10.5186 16 10.5186C15.7114 10.5186 15.4369 10.6432 15.247 10.8605V10.8595Z"
        fill="white"
      />
    </svg>
  );
};

export default ArrowUp;
