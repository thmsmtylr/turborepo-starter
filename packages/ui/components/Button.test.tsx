import { render } from "@testing-library/react";
import { Button } from "./Button";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

test("button passes a11y test", async () => {
  const { container } = render(<Button label="Button" />);
  expect(await axe(container)).toHaveNoViolations();
});
