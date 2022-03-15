import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button, Props } from '../src/Button';
import { action } from '@storybook/addon-actions';
const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: { defaultValue: 'Default Text' },
  },
};
export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'sm',
  children: 'I am primary button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'md',
  children: 'I am secondary',
  onClick: action('Secondary action click'),
};
