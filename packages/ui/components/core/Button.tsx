import { forwardRef, MouseEvent } from "react";
import { classNames } from "../../helpers/classNames";

export enum ButtonVariant {
  Black = "Black",
  Ghost = "Ghost",
  White = "White",
  GhostWhite = "GhostWhite",
}

export interface ButtonProps {
  variant: ButtonVariant;
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => unknown;
  disabled?: boolean;
  icon?: any | SVGElement;
  iconAlign?: "left" | "right";
  type?: "submit" | "reset" | "button" | undefined;
}

export type ButtonRef = HTMLButtonElement;

export const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const { label, onClick, disabled = false, type = "button" } = props;

  return (
    <button
      ref={ref}
      type={type}
      onClick={(e) => onClick(e)}
      disabled={disabled}
      className={classNames("")}
    >
      {label}
    </button>
  );
});

Button.displayName = "Button";
