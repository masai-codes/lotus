import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../../src/components/Button/Button';
const meta: Meta = {
  title: 'Components/Buttons/SocialMediaButton',
  component: Button,
  argTypes: {},
};
export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;
