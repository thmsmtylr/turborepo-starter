import { render, screen } from "@testing-library/react";
import { Logo } from "../Logo";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

jest.mock("next/link", () => {
  return ({ children }: any) => {
    return children;
  };
});

test("logo as text passes a11y test", async () => {
  const { container } = render(<Logo as="text" title="Emry" />);
  expect(await axe(container)).toHaveNoViolations();
});

it("logo as text renders unchanged", () => {
  const { container } = render(<Logo as="text" title="Emry" />);
  expect(container).toMatchSnapshot();
});

it("it renders the logo as a title", () => {
  const { getByText } = render(<Logo as="text" title="Emry" />);
  expect(getByText("Emry")).toBeTruthy();
});

it("logo as text has dark mode", () => {
  render(<Logo as="text" title="Emry" />);
  expect(screen.getByText("Emry")).toHaveClass("dark:text-white");
});
