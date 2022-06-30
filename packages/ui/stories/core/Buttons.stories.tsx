import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonVariant } from "../..";

export default {
  title: "⚛️ Core/Buttons",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Black = Template.bind({});
Black.args = {
  variant: ButtonVariant.Black,
  label: "Black",
  onClick: () => console.log("On click"),
};
