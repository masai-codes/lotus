import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Snackbar, Props } from '../../src/components/Snackbar/Snackbar';
const meta: Meta = {
  title: 'Components/Snackbar',
  component: Snackbar,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['error', 'success', 'warning', 'info'],
    },
  },
};
export default meta;

const Template: Story<Props> = (args) => <Snackbar {...args} />;

/** Variant Stories  *************************************************************/

// Error
export const Error = Template.bind({});
Error.args = {
  type: 'error',
};

// Success
export const Success = Template.bind({});
Success.args = {
  type: 'success',
};

// Warning
export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
};
// Info
export const Info = Template.bind({});
Info.args = {
  type: 'info',
};
// TODO: Neutral Snackbar
