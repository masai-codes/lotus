import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconsList, Props } from '../../src/components/Icons/IconsList';
const meta: Meta = {
  title: 'Components/Icons',
  component: IconsList,
  argTypes: {},
};
export default meta;

const Template: Story<Props> = (args) => <IconsList {...args} />;

// IconsList
export const Icons_List = Template.bind({});
Icons_List.args = {};
