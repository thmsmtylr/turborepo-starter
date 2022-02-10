import uniqueId from "lodash/uniqueId";
import { forwardRef, ChangeEvent } from "react";
import { classNames } from "../../helpers/classNames";

export interface RadioProps {
  type: string;
  legend?: string;
  label?: string;
  description?: string;
  options: {
    value?: string;
    checked?: boolean;
    disabled?: boolean;
  }[];
  variant?: "default" | "inline";
  onChange: (e: ChangeEvent<HTMLInputElement>) => unknown;
}

export type RadioRef = HTMLInputElement;

export const Radio = forwardRef<RadioRef, RadioProps>((props, ref) => {
  const { type, label, legend, description, options, variant, onChange } =
    props;

  return (
    <div>
      {label && (
        <label className="text-body1 text-black dark:text-white">{label}</label>
      )}
      {description && (
        <p className="text-body2 leading-5 text-grey2 mb-4">{description}</p>
      )}
      <fieldset>
        {legend && <legend className="sr-only">{legend}</legend>}
        <div
          className={classNames(
            variant === "default"
              ? "space-y-4"
              : "space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10"
          )}
        >
          {options.map((option, index: number) => {
            const id: string = uniqueId("radio-");

            return (
              <div key={index} className="flex items-center">
                <input
                  onChange={(e) => onChange(e)}
                  ref={ref}
                  id={id}
                  name="radio"
                  type={type}
                  defaultChecked={option.checked}
                  className={classNames(
                    option.disabled
                      ? "border-grey3 cursor-not-allowed"
                      : "border-black dark:border-grey2 cursor-pointer",
                    "w-[0.938rem] h-[0.938rem"
                  )}
                  disabled={option.disabled}
                />
                {option.value && (
                  <label
                    htmlFor={id}
                    className="ml-3 block text-caption cursor-pointer text-black dark:text-white"
                  >
                    {option.value}
                  </label>
                )}
              </div>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
});

Radio.displayName = "Radio";
