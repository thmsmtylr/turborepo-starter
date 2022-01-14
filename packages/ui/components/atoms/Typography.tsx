import { forwardRef } from "react";
import { classNames } from "../../helpers/classNames";

export interface TypographyProps {
  variant:
    | "text-heading"
    | "text-heading1"
    | "text-heading2"
    | "text-heading3"
    | "text-heading4"
    | "text-heading5"
    | "text-heading6"
    | "text-body1"
    | "text-body2"
    | "text-caption";
  align: "text-left" | "text-right" | "text-center" | "text-error";
  color: "text-black" | "text-grey" | "text-primary" | "text-white";
  label: string;
  weight: "font-normal";
}

export type TypographyRef = HTMLParagraphElement | HTMLHeadingElement;

export const Typography = forwardRef<TypographyRef, TypographyProps>(
  (props, ref) => {
    const {
      variant = "text-body1",
      align = "text-left",
      color = "text-black",
      label,
      weight,
    } = props;
    const darkMode = color === "text-black" ? "dark:text-white" : "";
    switch (variant) {
      case "text-heading":
        return (
          <div
            ref={ref}
            className={classNames(variant, align, color, weight, darkMode)}
          >
            {label}
          </div>
        );
      case "text-heading1":
        return (
          <h1
            ref={ref}
            className={classNames(variant, align, color, weight, darkMode)}
          >
            {label}
          </h1>
        );
      case "text-heading2":
        return (
          <h2
            ref={ref}
            className={classNames(variant, align, color, weight, darkMode)}
          >
            {label}
          </h2>
        );
      case "text-heading3":
        return (
          <h3
            ref={ref}
            className={classNames(variant, align, color, weight, darkMode)}
          >
            {label}
          </h3>
        );
      case "text-heading4":
        return (
          <h4
            ref={ref}
            className={classNames(variant, align, color, weight, darkMode)}
          >
            {label}
          </h4>
        );
      case "text-heading5":
        return (
          <h5
            ref={ref}
            className={classNames(variant, align, color, weight, darkMode)}
          >
            {label}
          </h5>
        );
      case "text-heading6":
        return (
          <h6
            ref={ref}
            className={classNames(variant, align, color, weight, darkMode)}
          >
            {label}
          </h6>
        );
      case "text-body1":
        return (
          <p
            ref={ref}
            className={classNames(variant, align, color, weight, darkMode)}
          >
            {label}
          </p>
        );
      case "text-body2":
        return (
          <p
            ref={ref}
            className={classNames(variant, align, color, weight, darkMode)}
          >
            {label}
          </p>
        );
      case "text-caption":
        return (
          <p
            ref={ref}
            className={classNames(variant, align, color, weight, darkMode)}
          >
            {label}
          </p>
        );

      default:
        return (
          <p
            ref={ref}
            className={classNames("text-body1 text-left font-normal", darkMode)}
          >
            {label}
          </p>
        );
    }
  }
);

Typography.displayName = "Typography";
