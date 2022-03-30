import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AllIcons, Props } from '../../src/components/Icons/AllIcons';
const meta: Meta = {
  title: 'Components/Icons',
  component: AllIcons,
  argTypes: {},
};
export default meta;

const Template: Story<Props> = (args) => <AllIcons {...args} />;

// IconsList
export const IconsList = Template.bind({});
IconsList.args = {};
