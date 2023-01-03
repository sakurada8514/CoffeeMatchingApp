import clsx from "clsx";
import { ReactElement, ReactNode } from "react";

const COLORS = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  ghost: "btn-ghost",
  info: "btn-info",
  success: " btn-success",
  warning: "btn-warning",
  error: "btn-error",
};

const SIZES = {
  lg: "btn-lg",
  md: "",
  sm: "btn-sm",
  xs: "btn-xs",
};

type ButtonProps = {
  children: ReactNode;
  type: "button" | "submit";
  color: keyof typeof COLORS;
  size: keyof typeof SIZES;
  isLoading?: boolean;
  wfull?: boolean;
  outline?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
};
export const Button = ({
  children,
  type = "button",
  color,
  size,
  isLoading = false,
  wfull = false,
  outline = false,
  startIcon,
  endIcon,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        "btn",
        wfull && "w-full",
        outline && "btn-outline",
        COLORS[color],
        SIZES[size],
        isLoading && "loading"
      )}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};
