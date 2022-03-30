import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, Props } from '../../src/components/Input/Input';
import { InformationOutline } from '../../src/assets/icons/components';
const meta: Meta = {
  title: 'Components/Input',
  component: Input,
  argTypes: {},
};
export default meta;

const Template: Story<Props> = (args) => <Input {...args} />;

/** Variant Stories  *************************************************************/

//
export const Example = Template.bind({});
Example.args = {
  type: 'tel',
  placeholder: '+91 95387 245678',
  leadingDropdown: true,
  rightIcon: <InformationOutline />,
  width: '18.75rem',
  size: 'body1',
  // getDropdownValueCallback: handleSelect,
  // getValueCallback: handleInput,
};
