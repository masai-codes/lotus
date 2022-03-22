import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  RadioButtonGroup,
  Props as RadioButtonGroupProps,
} from '../../src/components/Radio/RadioButtonGroup';
import { Props as RadioButtonProps } from '../../src/components/Radio/RadioButton';

const meta: Meta = {
  title: 'Components/Radio/RadioButtonGroup',
  component: RadioButtonGroup,
  argTypes: {
    commonSize: {
      control: { type: 'select' },
      options: ['regular', 'large'],
    },
  },
};
export default meta;

const options: RadioButtonProps[] = [
  {
    label: 'Radio One',
    support_label: 'Please type the supporting text',
    value: 'radio-one',
  },
  {
    label: 'Radio Two',
    support_label: 'Please type the supporting text',
    value: 'radio-two',
  },
  {
    label: 'Radio Three',
    support_label: 'Please type the supporting text',
    value: 'radio-three',
  },
  {
    label: 'Radio Four',
    support_label: 'Please type the supporting text',
    value: 'radio-four',
  },
];

const Template: Story<RadioButtonGroupProps> = (args) => (
  <RadioButtonGroup {...args} />
);

/** Size Stories  *************************************************************/

// Regular
export const RadioButtonGroupDemo = Template.bind({});
RadioButtonGroupDemo.args = {
  commonSize: 'regular',
  options,
  selectedValue: 'radio-two',
  onChange: (value: string) => {
    console.log(value);
  },
  stackDirection: 'row',
  spacing: '16px',
  gridTemplateComlumns: { base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' },
  columnGap: '16px',
  rowGap: '16px',
};
