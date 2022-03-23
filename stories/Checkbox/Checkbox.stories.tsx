import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Checkbox,
  Props as CheckboxProps,
} from '../../src/components/Checkbox/Checkbox';

const meta: Meta = {
  title: 'Components/Checkbox/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['regular', 'large'],
    },
  },
};
export default meta;
const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

/** Size Stories  *************************************************************/

// Regular
export const Regular = Template.bind({});
Regular.args = {
  size: 'regular',
  label: 'Regular Checkbox',
  support_label: 'Please type the supporting text',
  value: 'checkbox_label',
};

// Large
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large Checkbox',
  support_label: 'Please type the supporting text',
  value: 'checkbox_label',
};

/** Label/Support Label Stories  *************************************************************/

// No Label/SupportLabel
export const NoLabel = Template.bind({});
NoLabel.args = {
  size: 'regular',
  value: 'checkbox_label',
};

// No Support Label
export const NoSupportLabel = Template.bind({});
NoSupportLabel.args = {
  size: 'regular',
  label: 'Checkbox ',
  value: 'checkbox_label',
};

// Indeterminate
export const Indeterminate = Template.bind({});
Indeterminate.args = {
  size: 'regular',
  label: 'Checkbox ',
  value: 'checkbox_label',
  isIndeterminate: true,
};

// Disabled
export const Disabled = Template.bind({});
Disabled.args = {
  size: 'regular',
  label: 'Checkbox ',
  value: 'checkbox_label',
  disabled: true,
};
// Indeterminate Disabled
export const IndeterminateDisabled = Template.bind({});
IndeterminateDisabled.args = {
  size: 'regular',
  label: 'Checkbox ',
  value: 'checkbox_label',
  isIndeterminate: true,
  disabled: true,
};
