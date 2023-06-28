import * as React from "react";

type Variants = "primary" | "outline";

interface Props {
  variant?: Variants;
  dark?: boolean;
  className?: string;
}

const Button = ({
  children,
  variant = "primary",
  dark,
  className
}: React.PropsWithChildren<Props>) => {
  const styles = {
    common: `text-sm text-white font-black uppercase h-12 px-8 pt-[3px] rounded-md transition flex items-center`,
    primary: `${dark ? "bg-purple" : "bg-orange"}`,
    outline: `border border-buttonOutline shadow-button hover:bg-white hover:text-burgundy`,
  };

  return (
    <button className={`${styles.common} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
