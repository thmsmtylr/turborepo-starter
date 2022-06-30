import { forwardRef, MouseEvent } from "react";
import { classNames } from "../../helpers/classNames";

export enum ButtonSize {
  SM = "SM",
  MD = "MD",
  LG = "LG",
  XL = "XL",
  XXL = "XXL",
}

export enum ButtonHierarchy {
  Primary = "Primary",
  SecondaryColor = "SecondaryColor",
  SecondaryGrey = "SecondaryGrey",
  TertiaryColor = "TertiaryColor",
  TertiaryGrey = "TertiaryGrey",
  LinkColor = "LinkColor",
  LinkGrey = "LinkGrey",
}

export enum ButtonState {
  Default = "Default",
  Hover = "Hover",
  Focused = "Focused",
  Disabled = "Disabled",
}

export interface ButtonProps {
  size: ButtonSize;
  hierarchy: ButtonHierarchy;
  state: ButtonState;
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => unknown;
  disabled?: boolean;
  icon?: any | SVGElement;
  iconAlign?: "left" | "right";
  type?: "submit" | "reset" | "button" | undefined;
}

export type ButtonRef = HTMLButtonElement;

/**
 * @description Buttons communicate actions that users can take.
 */
export const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const {
    size = ButtonSize.SM,
    hierarchy = ButtonHierarchy.Primary,
    state = ButtonState.Default,
    label,
    onClick,
    type = "button",
  } = props;

  return (
    <button
      ref={ref}
      type={type}
      onClick={(e) => onClick(e)}
      disabled={state === ButtonState.Disabled}
      className={classNames(
        size === ButtonSize.SM ? "px-3.5 py-2" : "",
        size === ButtonSize.MD ? "px-4 py-2.5" : "",
        size === ButtonSize.LG ? "px-4.5 py-2.5" : "",
        size === ButtonSize.XL ? "px-5 py-3" : "",
        size === ButtonSize.XXL ? "px-7 py-4" : "",
        // Default
        "gap-2 bg-primary rounded-lg text-white text-sm font-medium flex items-center justify-center"
      )}
    >
      {label}
    </button>
  );
});

Button.displayName = "Button";
