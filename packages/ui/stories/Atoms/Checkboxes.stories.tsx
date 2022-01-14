import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "../../components/atoms/Checkbox";

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
};

export const DefaultLabel = Template.bind({});
DefaultLabel.args = {
  checked: false,
  label: "Default with label",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const DisabledLabel = Template.bind({});
DisabledLabel.args = {
  disabled: true,
  label: "Disabled with label",
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const CheckedLabel = Template.bind({});
CheckedLabel.args = {
  checked: true,
  label: "Checked with label",
};
