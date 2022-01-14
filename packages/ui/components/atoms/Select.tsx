import { Listbox, Transition } from "@headlessui/react";
import { forwardRef, useState, Fragment } from "react";
import { classNames } from "../../helpers/classNames";
import ArrowRight from "../../images/icons/arrows/@1x/right.svg";

export interface SelectProps {
  options: {
    value: string;
    selected?: true;
    disabled?: boolean;
  }[];
  placeholder?: string;
  error?: boolean;
}

export type SelectRef = HTMLDivElement;

export const Select = forwardRef<SelectRef, SelectProps>((props, ref) => {
  const { options, placeholder, error } = props;
  const [selected, setSelected] = useState(
    placeholder ? placeholder : options[0].value
  );

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className="relative" ref={ref}>
          <Listbox.Button
            className={classNames(
              error ? "!border-b-error" : "",
              open ? "border-b-black" : "border-b-grey3",
              "border-b relative w-full py-[0.281rem] pl-2.5 pr-10 text-left bg-white/0 rounded-lg cursor-default focus:outline-none text-body2 transition-colors"
            )}
          >
            <span
              className={classNames(
                placeholder && placeholder === selected
                  ? "text-grey2"
                  : "text-black",
                error ? "text-error" : "",
                "block truncate"
              )}
            >
              {selected}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ArrowRight
                className={classNames(
                  open ? "-rotate-90" : "rotate-90",
                  error ? "text-error" : "text-black",
                  "transition-transform"
                )}
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-2 overflow-auto text-base bg-white max-h-60 focus:outline-none text-caption">
              {options.map((option, index: number) => (
                <Listbox.Option
                  key={index}
                  className={classNames(
                    option.disabled
                      ? "text-grey3 cursor-not-allowed"
                      : "text-grey2 cursor-pointer hover:text-black",
                    "select-none relative py-2 pl-[0.938rem] pr-4 transition-colors"
                  )}
                  value={option.value}
                  disabled={option.disabled}
                >
                  <span className="block truncate">{option.value}</span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
});

Select.displayName = "Select";
