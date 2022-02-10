import uniqueId from "lodash/uniqueId";
import { useState, useEffect, ChangeEvent, forwardRef } from "react";
import { classNames } from "../../helpers/classNames";

export interface CheckboxProps {
  label?: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => unknown;
  disabled?: boolean;
  checked?: boolean;
}

export type CheckboxRef = HTMLInputElement;

export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>((props, ref) => {
  const { label, onChange, disabled, checked } = props;
  const [isChecked, setIsChecked] = useState<boolean | undefined>(checked);
  const [checkboxId, setCheckboxId] = useState<string>("");

  useEffect(() => {
    const id: string = uniqueId(
      label
        ? `${label.trim().replace(/\s+/g, "-").toLocaleLowerCase()}-`
        : uniqueId("checkbox-")
    );
    setCheckboxId(id);
  }, [label]);

  return (
    <span className={classNames(label ? "inline-flex items-center" : "")}>
      <input
        ref={ref}
        onClick={() => setIsChecked(!isChecked)}
        onChange={(e) => onChange(e)}
        disabled={disabled}
        checked={isChecked}
        type="checkbox"
        id={checkboxId}
        className={classNames(
          disabled
            ? "bg-grey3 border-grey3 cursor-not-allowed"
            : "border-black dark:border-grey2",
          isChecked ? "checked:border-white" : "",
          "cursor-pointer w-[0.938rem] h-[0.938rem] border-solid border rounded-none bg-white/0 focus:ring-black dark:focus:border-grey2 focus:ring-1 text-black"
        )}
        tabIndex={0}
      />
      {label && (
        <label
          className={classNames(
            label && disabled ? "text-grey3" : "",
            isChecked ? "dark:text-white" : "dark:text-grey2",
            "text-caption text-black ml-3"
          )}
          htmlFor={checkboxId}
        >
          {label}
        </label>
      )}
    </span>
  );
});

Checkbox.displayName = "Checkbox";
