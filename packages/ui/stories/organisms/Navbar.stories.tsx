import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Navbar } from "../..";
import BrandImage from "../../images/emry-logo.svg";

export default {
  title: "🦠 Organisms/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Emry",
  logo: <img src="emry-logo.svg" />,
};
