import { forwardRef } from "react";
import { classNames } from "../../helpers/classNames";

export interface LinkProps {}

export type LinkRef = HTMLDivElement;

export const Link = forwardRef<LinkRef, LinkProps>((props, ref) => {
  return <></>;
});

Link.displayName = "Link";
