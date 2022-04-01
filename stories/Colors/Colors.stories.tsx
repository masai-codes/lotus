import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Colors, Props } from '../../src/components/Colors/Colors';
const meta: Meta = {
  title: 'Components/Colors',
  component: Colors,
  argTypes: {},
};
export default meta;

const Template: Story<Props> = (args) => <Colors {...args} />;

/** Variant Stories  *************************************************************/

// Example1
export const ColorCodes = Template.bind({});
ColorCodes.args = {};
