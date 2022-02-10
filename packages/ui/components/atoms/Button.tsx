import { forwardRef, MouseEvent } from "react";
import { classNames } from "../../helpers/classNames";

export interface ButtonProps {
  variant: "black" | "ghost" | "white" | "ghostWhite";
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => unknown;
  disabled?: boolean;
  icon?: any | SVGElement;
  iconAlign?: "left" | "right";
  type?: "submit" | "reset" | "button" | undefined;
}

export type ButtonRef = HTMLButtonElement;

export const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const {
    variant = "black",
    label,
    onClick,
    disabled = false,
    icon,
    iconAlign,
    type = "button",
  } = props;

  return (
    <button
      ref={ref}
      type={type}
      onClick={(e) => onClick(e)}
      disabled={disabled}
      className={classNames(
        variant === "black"
          ? `text-white dark:text-black bg-black dark:bg-white rounded ${
              disabled ? "text-black bg-grey4 rounded" : ""
            }`
          : "",
        variant === "white"
          ? `bg-white text-black rounded ${
              disabled ? "text-black bg-grey4 rounded" : ""
            }`
          : "",
        variant === "ghost"
          ? `bg-opacity-0 border border-black dark:border-white dark:text-white text-black rounded ${
              disabled ? "text-black bg-grey4 rounded" : ""
            }`
          : "",
        variant === "ghostWhite"
          ? `text-white dark:text-black bg-black dark:bg-white ${
              disabled ? "text-black bg-grey4 rounded" : ""
            }`
          : "",
        icon && iconAlign === "right" ? "flex-row-reverse" : "",
        !disabled ? "hover:bg-opacity-90 transition-all" : "cursor-not-allowed",
        "h-[3.125rem] w-[10.375rem] relative inline-flex items-center justify-center"
      )}
    >
      {icon && (
        <span
          className={classNames(
            icon && iconAlign === "left" && "mr-2",
            icon && iconAlign === "right" && "ml-2"
          )}
        >
          {icon}
        </span>
      )}
      {label}
      {variant === "ghostWhite" && (
        <span className="absolute border border-white dark:border-black border-solid inset-[1px] rounded" />
      )}
    </button>
  );
});

Button.displayName = "Button";
