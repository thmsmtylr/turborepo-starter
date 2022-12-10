import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "..";

export default {
  title: "Buttons",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default",
  onClick: () => console.log("On click"),
};
