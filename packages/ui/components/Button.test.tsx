import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "../stories/Buttons.stories";

const { Default } = composeStories(stories);

test("renders default button with default args", () => {
  render(<Default />);
  const buttonElement = screen.getByText(/Default/i);
  expect(buttonElement).not.toBeNull();
});
