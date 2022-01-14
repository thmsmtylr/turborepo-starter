import { forwardRef, MouseEvent } from "react";
import { classNames } from "../../helpers/classNames";

export interface ButtonProps {
  variant: "black" | "ghost" | "white" | "ghostWhite";
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => unknown;
  disabled: boolean;
  icon?: any | SVGElement;
  iconAlign?: "left" | "right";
  type: "button" | "submit";
}

export type ButtonRef = HTMLButtonElement;

export const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const {
    variant = "black",
    label,
    onClick,
    disabled,
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
          ? `text-white bg-black rounded ${
              disabled ? "text-black bg-grey4 rounded" : ""
            }`
          : "",
        variant === "white"
          ? `bg-white text-black rounded ${
              disabled ? "text-black bg-grey4 rounded" : ""
            }`
          : "",
        variant === "ghost"
          ? `bg-opacity-0 border border-black rounded ${
              disabled ? "text-black bg-grey4 rounded" : ""
            }`
          : "",
        variant === "ghostWhite"
          ? `text-white bg-black ${
              disabled ? "text-black bg-grey4 rounded" : ""
            }`
          : "",
        icon && iconAlign === "right" ? "flex-row-reverse" : "",
        "h-[3.125rem] w-[10.375rem] relative inline-flex items-center justify-center hover:bg-opacity-90 transition-all"
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
        <span className="absolute border border-white border-solid inset-[1px] rounded" />
      )}
    </button>
  );
});

Button.displayName = "Button";
