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
  colorScheme: 'blue',
  children: 'I am Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  colorScheme: 'gray',
  children: 'I am secondary',
  onClick: action('Secondary action click'),
};
