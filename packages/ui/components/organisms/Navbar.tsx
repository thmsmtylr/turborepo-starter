import Link from "next/link";
import { forwardRef, ReactNode } from "react";
import { classNames } from "../../helpers/classNames";
import { Logo } from "../atoms/Logo";

export interface NavbarItemEl {
  as: "el";
  el: ReactNode;
}

export interface NavbarItemLinks {
  as: "link";
  name: string;
  href: string;
  current: boolean;
}

export enum NavbarAlignItems {
  Left = "left",
  Right = "right",
}

export interface NavbarProps {
  alignItems?: NavbarAlignItems;
  items: Array<NavbarItemEl | NavbarItemLinks> | undefined;
}

export type NavbarRef = HTMLDivElement;

export const Navbar = forwardRef<NavbarRef, NavbarProps>((props, ref) => {
  const { items, alignItems } = props;
  const align = alignItems ? alignItems : NavbarAlignItems.Right;

  return (
    <header className="bg-background dark:bg-black" ref={ref}>
      <div className="mx-auto px-2 sm:px-6 lg:px-8 max-w-navbar">
        <div className="relative flex items-center h-navbar">
          <div className="grid grid-cols-12 flex-1 gap-grid">
            <div className="col-span-2 flex items-center">
              <Logo as="text" title="Emry" />
            </div>
            {items && (
              <div
                className={classNames(
                  align === NavbarAlignItems.Left
                    ? "col-start-4"
                    : "col-span-10 ml-auto"
                )}
              >
                {items && (
                  <nav>
                    <ul className="flex space-x-16 items-center">
                      {items.map((item, index) => {
                        if (item.as === "link") {
                          return (
                            <li
                              key={index}
                              className={classNames(
                                item.current
                                  ? "border-b border-b-grey3 dark:border-b-grey1"
                                  : "hover:-mb-[7px]",
                                "text-body2 pb-1.5 -mb-1.5 transition duration-300 hover:border-b hover:border-black dark:hover:border-white dark:text-white text-black"
                              )}
                            >
                              <Link
                                aria-current={item.current}
                                href={item.href}
                              >
                                {item.name}
                              </Link>
                            </li>
                          );
                        }

                        return <li key={index}>{item.el}</li>;
                      })}
                    </ul>
                  </nav>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
});

Navbar.displayName = "Navbar";
