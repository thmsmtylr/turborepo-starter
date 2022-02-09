import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "../..";

export default {
  title: "⚛️ Atoms/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [{ value: "Value" }, { value: "Value 2" }, { value: "Value 3" }],
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  options: [
    { value: "African glass catfish" },
    { value: "Amur pike" },
    { value: "Codlet" },
    { value: "Goldfish" },
  ],
  placeholder: "Select your favorite fish",
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: [
    { value: "African glass catfish" },
    { value: "Amur pike" },
    { value: "Codlet", disabled: true },
    { value: "Goldfish" },
  ],
  placeholder: "Select your favorite fish",
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  options: [{ value: "Value" }, { value: "Value 2" }, { value: "Value 3" }],
};
