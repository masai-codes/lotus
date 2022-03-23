import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  CheckboxGroup,
  Props as CheckboxGroupProps,
} from '../../src/components/Checkbox/CheckboxGroup';
import { Props as CheckboxProps } from '../../src/components/Checkbox/Checkbox';

const meta: Meta = {
  title: 'Components/Checkbox/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
    commonSize: {
      control: { type: 'radio' },
      options: ['regular', 'large'],
    },
  },
};
export default meta;

const options: CheckboxProps[] = [
  {
    label: 'Checkbox One',
    support_label: 'Please type the supporting text',
    value: 'checkbox-one',
  },
  {
    label: 'Checkbox Two',
    support_label: 'Please type the supporting text',
    value: 'checkbox-two',
  },
  {
    label: 'Checkbox Three',
    support_label: 'Please type the supporting text',
    value: 'checkbox-three',
  },
  {
    label: 'Checkbox Four',
    support_label: 'Please type the supporting text',
    value: 'checkbox-four',
  },
];

const Template: Story<CheckboxGroupProps> = (args) => (
  <CheckboxGroup {...args} />
);

/** Size Stories  *************************************************************/

// Regular
export const CheckboxGroupDemo = Template.bind({});
CheckboxGroupDemo.args = {
  commonSize: 'regular',
  options,
  selectedValues: ['checkbox-two', 'checkbox-three'],
  onChange: (value: string) => {
    console.log(value);
  },
  spacing: '16px',
  gridTemplateComlumns: { base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' },
  columnGap: '16px',
  rowGap: '16px',
};
// Disabled
export const CheckboxGroupDisabledDemo = Template.bind({});
CheckboxGroupDisabledDemo.args = {
  commonSize: 'regular',
  options,
  selectedValues: ['checkbox-one', 'checkbox-four'],
  onChange: (value: string) => {
    console.log(value);
  },

  spacing: '16px',

  columnGap: '16px',
  rowGap: '16px',
  disabled: true,
};
// Single Checkbox defualt checked

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  commonSize: 'regular',
  options: [
    {
      label: 'Checkbox One',
      support_label: 'Please type the supporting text',
      value: 'checkbox-one',
    },
  ],
  selectedValues: ['checkbox-one'],
  onChange: (value: string) => {
    console.log(value);
  },
};
