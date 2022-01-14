import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "../../components/atoms/Typography";

export default {
  title: "⚛️ Atoms/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Default",
};

export const Heading = Template.bind({});
Heading.args = {
  label: "Heading",
  variant: "text-heading",
  align: "text-left",
};

export const Heading1 = Template.bind({});
Heading1.args = {
  label: "Heading 1",
  variant: "text-heading1",
  align: "text-left",
};

export const Heading2 = Template.bind({});
Heading2.args = {
  label: "Heading 2",
  variant: "text-heading2",
  align: "text-left",
};

export const Heading3 = Template.bind({});
Heading3.args = {
  label: "Heading 3",
  variant: "text-heading3",
  align: "text-left",
};

export const Heading4 = Template.bind({});
Heading4.args = {
  label: "Heading 4",
  variant: "text-heading4",
  align: "text-left",
};

export const Heading5 = Template.bind({});
Heading5.args = {
  label: "Heading 5",
  variant: "text-heading5",
  align: "text-left",
};

export const Heading6 = Template.bind({});
Heading6.args = {
  label: "Heading 6",
  variant: "text-heading6",
  align: "text-left",
};

export const Body1 = Template.bind({});
Body1.args = {
  label: "Body 1",
  variant: "text-body1",
  align: "text-left",
};

export const Body2 = Template.bind({});
Body2.args = {
  label: "Body 2",
  variant: "text-body2",
  align: "text-left",
};

export const Caption = Template.bind({});
Caption.args = {
  label: "Caption",
  variant: "text-caption",
  align: "text-left",
};
