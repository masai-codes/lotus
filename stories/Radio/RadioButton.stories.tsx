import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  RadioButton,
  Props as RadioButtonProps,
} from '../../src/components/Radio/RadioButton';

const meta: Meta = {
  title: 'Components/Radio/RadioButton',
  component: RadioButton,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['regular', 'large'],
    },
  },
};
export default meta;
const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

/** Size Stories  *************************************************************/

// Regular
export const Regular = Template.bind({});
Regular.args = {
  size: 'regular',
  label: 'Regular Radio',
  support_label: 'Please type the supporting text',
  value: 'radio_label',
};

// Large
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large Radio',
  support_label: 'Please type the supporting text',
  value: 'radio_label',
};

/** Label/Support Label Stories  *************************************************************/

// No Label/SupportLabel
export const NoLabel = Template.bind({});
NoLabel.args = {
  size: 'regular',
  value: 'radio_label',
};

// No Support Label
export const NoSupportLabel = Template.bind({});
NoSupportLabel.args = {
  size: 'regular',
  label: 'Radio Button',
  value: 'radio_label',
};

// Disabled
export const Disabled = Template.bind({});
Disabled.args = {
  size: 'regular',
  label: 'Radio Button',
  value: 'radio_label',
  disabled: true,
};

// Default checked
export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  size: 'regular',
  label: 'Radio Button',
  value: 'radio_label',
  defaultChecked: true,
};
