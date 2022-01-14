import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../../components/atoms/Button";
import ArrowDown from "../../images/icons/arrows/@1x/down.svg";

export default {
  title: "⚛️ Atoms/Buttons",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Black = Template.bind({});
Black.args = {
  variant: "black",
  label: "Black",
  onClick: () => console.log("On click"),
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "black",
  label: "Disabled",
  disabled: true,
  onClick: () => console.log("On click"),
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost",
  label: "Ghost",
  onClick: () => console.log("On click"),
};

export const White = Template.bind({});
White.args = {
  variant: "white",
  label: "White",
  onClick: () => console.log("On click"),
};

export const GhostWhite = Template.bind({});
GhostWhite.args = {
  variant: "ghostWhite",
  label: "Ghost White",
  onClick: () => console.log("On click"),
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  variant: "black",
  label: "Black",
  icon: <ArrowDown />,
  iconAlign: "left",
  onClick: () => console.log("On click"),
};

export const IconRight = Template.bind({});
IconRight.args = {
  variant: "black",
  label: "Black",
  icon: <ArrowDown />,
  iconAlign: "right",
  onClick: () => console.log("On click"),
};
