import { ReactNode } from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

export default Button;
