import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Navbar, Button } from "../..";

export default {
  title: "🦠 Organisms/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
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
  ],
};
