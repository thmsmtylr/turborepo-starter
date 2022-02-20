import { render } from "@testing-library/react";
import { Navbar, NavbarProps } from "../Navbar";
import { Button } from "../../atoms/Button";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

jest.mock("next/link", () => {
  return ({ children }: any) => {
    return children;
  };
});

const items: NavbarProps["items"] = [
  {
    as: "link",
    name: "Features",
    href: "/features",
    current: true,
  },
  {
    as: "link",
    name: "About",
    href: "/about",
    current: false,
  },
  {
    as: "link",
    name: "Contact",
    href: "/contact",
    current: false,
  },
  {
    as: "el",
    el: (
      <Button
        onClick={() => console.log("Button click")}
        variant="ghost"
        label="Download"
      />
    ),
  },
];

test("navbar passes a11y test", async () => {
  const { container } = render(<Navbar items={items} />);
  expect(await axe(container)).toHaveNoViolations();
});

it("navbar renders unchanged", () => {
  const { container } = render(<Navbar items={items} />);
  expect(container).toMatchSnapshot();
});
