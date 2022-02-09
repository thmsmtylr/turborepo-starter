import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "../..";
import ArrowRightLong from "../../images/icons/arrows/@1x/right-short.svg";
import ArrowRight from "../../images/icons/arrows/@1x/right.svg";
import Show from "../../images/icons/basic/@1px/show.svg";

export default {
  title: "⚛️ Atoms/Inputs",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Default input",
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Disabled input",
  disabled: true,
};

export const Required = Template.bind({});
Required.args = {
  placeholder: "Required input",
  required: true,
};

export const IconButton = Template.bind({});
IconButton.args = {
  placeholder: "Icon button",
  icon: <ArrowRightLong />,
  onButtonClick: () => console.log("Button click"),
};

export const IconButtonLabel = Template.bind({});
IconButtonLabel.args = {
  placeholder: "Icon button label",
  icon: <ArrowRight />,
  iconLabel: "Get Started",
  onButtonClick: () => console.log("Button click"),
};

export const Error = Template.bind({});
Error.args = {
  placeholder: "Error",
  error: true,
};

export const ErrorIconMessage = Template.bind({});
ErrorIconMessage.args = {
  placeholder: "Error",
  error: true,
  errorMessage: "Error message",
  icon: <ArrowRight />,
  onButtonClick: () => console.log("Button click"),
};

export const ErrorIconButtonLabel = Template.bind({});
ErrorIconButtonLabel.args = {
  placeholder: "Error",
  error: true,
  errorMessage: "Error message",
  icon: <ArrowRight />,
  iconLabel: "Get Started",
  onButtonClick: () => console.log("Button click"),
};

export const Password = Template.bind({});
Password.args = {
  placeholder: "Password",
  type: "password",
  icon: <Show />,
};
