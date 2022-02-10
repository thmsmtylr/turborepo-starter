import * as React from "react";
import { forwardRef, ChangeEvent, useState, MouseEvent } from "react";
import { classNames } from "../../helpers/classNames";

export interface InputProps {
  placeholder: string;
  type?: "text" | "email" | "password" | string;
  disabled?: boolean;
  icon?: any | SVGElement;
  iconLabel?: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => unknown;
  onButtonClick?: (e: MouseEvent<HTMLDivElement>) => unknown;
}

export type InputRef = HTMLInputElement;

export const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const {
    placeholder,
    type,
    disabled,
    icon,
    iconLabel,
    required,
    error,
    errorMessage,
    onChange,
    onButtonClick,
  } = props;
  const [value, setValue] = useState<string>("");

  const handleChangle = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const input = (
    <input
      ref={ref}
      type={type}
      placeholder={required ? "* " + placeholder : placeholder}
      aria-label={placeholder}
      onChange={(e) => {
        onChange(e), handleChangle(e);
      }}
      value={value}
      disabled={disabled}
      required={required}
      className={classNames(
        disabled
          ? "cursor-not-allowed border-b-grey3 placeholder:text-grey3"
          : "",
        error
          ? "text-error border-b-error placeholder:text-error"
          : "text-black border-b-grey3 focus:border-b-black placeholder:text-grey2",
        "text-body2 w-full border-x-0 border-t-0 border-b focus:ring-white/0 focus:outline-none h-[2.063rem] p-2.5 bg-white/0 transition-colors"
      )}
    />
  );

  if (icon && iconLabel) {
    return (
      <div className="relative">
        {input}
        <div
          className={classNames(
            error ? "text-error" : "text-black",
            "absolute inset-y-0 right-0 flex items-center cursor-pointer hover:opacity-90"
          )}
          role="button"
          tabIndex={0}
          onClick={onButtonClick}
        >
          <span
            className={classNames(
              error ? "text-error text-caption" : "text-black text-body2",
              "mr-[0.5rem]"
            )}
          >
            {error && errorMessage ? "* " + errorMessage : iconLabel}
          </span>
          {icon}
        </div>
      </div>
    );
  }

  if (icon) {
    return (
      <div className="relative">
        {input}
        <div
          className={classNames(
            error ? "text-error" : "text-black",
            "absolute inset-y-0 right-0 flex items-center cursor-pointer"
          )}
          role="button"
          tabIndex={0}
          onClick={onButtonClick}
        >
          <span
            className={classNames(
              error ? "text-error text-caption" : "text-black text-body2",
              "mr-[0.5rem]"
            )}
          >
            {error && errorMessage && "* " + errorMessage}
          </span>{" "}
          {icon}
        </div>
      </div>
    );
  }

  if (error && errorMessage) {
    return (
      <div className="relative">
        {input}
        <div className="absolute inset-y-0 right-0 flex items-center cursor-pointer text-error text-caption">
          {"* " + errorMessage}
        </div>
      </div>
    );
  }

  return input;
});

Input.displayName = "Input";
