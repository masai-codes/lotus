import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextStyles, Props } from '../../src/components/TextStyles/TextStyles';
const meta: Meta = {
  title: 'Components/Typography',
  component: TextStyles,
  argTypes: {},
};
export default meta;

const Template: Story<Props> = (args) => <TextStyles {...args} />;

/** Variant Stories  *************************************************************/

// Example1
export const TextStylesList = Template.bind({});
TextStylesList.args = {};
