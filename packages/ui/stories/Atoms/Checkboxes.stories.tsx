import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "../..";

export default {
  title: "⚛️ Atoms/Checkboxes",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  checked: false,
  onChange: () => console.log("On Change"),
};

export const DefaultLabel = Template.bind({});
DefaultLabel.args = {
  checked: false,
  label: "Default with label",
  onChange: () => console.log("On Change"),
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  onChange: () => console.log("On Change"),
};

export const DisabledLabel = Template.bind({});
DisabledLabel.args = {
  disabled: true,
  label: "Disabled with label",
  onChange: () => console.log("On Change"),
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  onChange: () => console.log("On Change"),
};

export const CheckedLabel = Template.bind({});
CheckedLabel.args = {
  checked: true,
  label: "Checked with label",
  onChange: () => console.log("On Change"),
};
