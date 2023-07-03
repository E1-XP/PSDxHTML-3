import * as React from "react";

type Variants = "primary" | "secondary";

interface Props {
  variant?: Variants;
  dark?: boolean;
  className?: string;
}

const Button = ({
  children,
  variant = "primary",
  dark,
  className,
}: React.PropsWithChildren<Props>) => {
  const styles = {
    common: `text-sm text-white font-black uppercase h-12 px-8 pt-[3px] rounded-md transition flex items-center`,
    primary: `${dark ? "bg-purple" : "bg-orange"}`,
    secondary: `border border-buttonOutline shadow-button ${
      dark ? "bg-transparent text-white" : "bg-white text-burgundy"
    } hover:bg-white hover:text-burgundy`,
  };

  return (
    <button className={`${styles.common} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
