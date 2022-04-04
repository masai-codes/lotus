import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Chips, Props } from '../../src/components/Chips/Chips';
import { CheckCircle } from '../../src/assets/icons/components';
const meta: Meta = {
  title: 'Components/Chips',
  component: Chips,
  argTypes: {},
};
export default meta;

const Template: Story<Props> = (args) => <Chips {...args} />;

/** Variant Stories  *************************************************************/

// Default
export const Default = Template.bind({});
Default.args = {
  label: 'Label',
};

// LeftIcon
export const LeftIcon = Template.bind({});
LeftIcon.args = {
  label: 'Label',
  leftIcon: <CheckCircle />,
};

// RightIcon
export const RightIcon = Template.bind({});
RightIcon.args = {
  label: 'Label',
  rightIcon: <CheckCircle />,
};

// Disabled
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  disabled: true,
};
// DisabledIcon
export const DisabledIcon = Template.bind({});
DisabledIcon.args = {
  label: 'Label',
  disabled: true,
  rightIcon: <CheckCircle />,
};
