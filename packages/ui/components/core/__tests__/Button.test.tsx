import { render } from "@testing-library/react";
import { Button, ButtonVariant } from "../Button";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

test("button passes a11y test", async () => {
  const { container } = render(
    <Button label="ghost" variant={ButtonVariant.Black} onClick={() => null} />
  );
  expect(await axe(container)).toHaveNoViolations();
});
