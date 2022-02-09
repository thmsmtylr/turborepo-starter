import React, { forwardRef } from "react";
import { classNames } from "../../helpers/classNames";

export interface NavbarProps {
  logo: any | SVGAElement | HTMLImageElement | string;
  title: string;
  navItems?: {
    name: string;
    href: string;
    current: boolean;
  }[];
}

export type NavbarRef = HTMLDivElement;

export const Navbar = forwardRef<NavbarRef, NavbarProps>((props, ref) => {
  const { logo, title, navItems } = props;

  const handleLogo = (logo: any) => {
    switch (logo) {
      case logo.type === "img" && logo.props.src.length > 0:
        return logo;
      case logo.type.includes("svg"):
        return logo;
      default:
        break;
    }
    return logo;
  };

  return (
    <nav className="px-2 sm:px-6 lg:px-8 bg-background">{handleLogo(logo)}</nav>
  );
});

Navbar.displayName = "Navbar";
