import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Radio } from "../../components/atoms/Radio";

export default {
  title: "⚛️ Atoms/Radios",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "radio",
  options: [
    {
      checked: false,
    },
  ],
};

export const DefaultLabel = Template.bind({});
DefaultLabel.args = {
  type: "radio",
  options: [
    {
      value: "Default with value",
      checked: false,
    },
  ],
};

export const Checked = Template.bind({});
Checked.args = {
  type: "radio",
  options: [
    {
      checked: true,
    },
  ],
};

export const CheckedValue = Template.bind({});
CheckedValue.args = {
  type: "radio",
  options: [
    {
      value: "Checked with value",
      checked: true,
    },
  ],
};

export const CheckedLabel = Template.bind({});
CheckedLabel.args = {
  type: "radio",
  label: "Radio with label",
  options: [
    {
      value: "Checked with label",
      checked: true,
    },
  ],
};

export const CheckedLabelLegend = Template.bind({});
CheckedLabelLegend.args = {
  type: "radio",
  label: "Radio with label and legend",
  legend: "Radio legend",
  options: [
    {
      value: "Radio with label and legend",
      checked: true,
    },
  ],
};

export const CheckedLabelLegendDescription = Template.bind({});
CheckedLabelLegendDescription.args = {
  type: "radio",
  label: "Radio with label, legend and description",
  description: "Description for radio with label and legend",
  legend: "Radio with label, legend and description",
  options: [
    {
      value: "Radio with label, legend and description",
      checked: true,
    },
  ],
};

export const Inline = Template.bind({});
Inline.args = {
  type: "radio",
  variant: "inline",
  options: [
    {
      value: "Value",
      checked: false,
    },
    {
      value: "Value 2",
      checked: false,
    },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "radio",
  options: [{ disabled: true }],
};
