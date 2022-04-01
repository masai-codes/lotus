import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Headings, Props } from '../../src/components/TextStyles/Headings';
const meta: Meta = {
  title: 'Components/Typography',
  component: Headings,
  argTypes: {},
};
export default meta;

const Template: Story<Props> = (args) => <Headings {...args} />;

/** Variant Stories  *************************************************************/

// Example1
export const HeadingList = Template.bind({});
HeadingList.args = {};
