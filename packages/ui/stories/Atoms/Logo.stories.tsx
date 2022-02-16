import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Logo } from "../..";
import EmryLogo from "../../images/emry-logo.svg";

export default {
  title: "⚛️ Atoms/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Text = Template.bind({});
Text.args = {
  as: "text",
  title: "Emry",
};

export const Image = Template.bind({});
Image.args = {
  as: "image",
  alt: "Emry",
  title: "Emry",
  el: <EmryLogo />,
};
