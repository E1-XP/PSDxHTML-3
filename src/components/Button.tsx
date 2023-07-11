import * as React from "react";

type Variants = "primary" | "secondary";

interface Props {
  variant?: Variants;
  dark?: boolean;
  className?: string;
  onClick?: () => any;
}

const Button = ({
  children,
  variant = "primary",
  dark,
  className,
  onClick,
}: React.PropsWithChildren<Props>) => {
  const styles = {
    common: `text-sm font-black uppercase h-12 px-8 pt-[3px] rounded-md transition flex items-center`,
    primary: `${
      dark ? "bg-purple text-white" : "bg-orange text-white"
    } hover:brightness-90`,
    secondary: `border border-buttonOutline shadow-button ${
      dark
        ? "bg-transparent text-white hover:bg-white hover:text-burgundy"
        : "bg-white text-burgundy hover:brightness-95"
    } `,
  };

  return (
    <button
      className={`${styles.common} ${styles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
