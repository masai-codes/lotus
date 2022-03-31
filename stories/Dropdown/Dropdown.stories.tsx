import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown, Props } from '../../src/components/Dropdown/Dropdown';

const meta: Meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {},
};
export default meta;

const Template: Story<Props> = (args) => <Dropdown {...args} />;
import { BookIcon, AlphaBCircle } from '../../src/assets/icons/components';
const options = [
  {
    text: 'Currently studying',
    icon: <BookIcon boxSize="6" />,
  },
  {
    text: 'Neither studying nor working',
  },
  {
    text: 'Currently working',
    icon: <BookIcon boxSize="6" />,
  },
  {
    text: 'Neither studying',
  },
  {
    text: 'Lorem ipsum',
    icon: <BookIcon boxSize="6" />,
  },
  {
    text: 'Lorem ipsum Lorem',
  },
];
// Default
export const Default = Template.bind({});
Default.args = {
  width: '400px',
  options,
  getValueCallback: (value) => {
    console.log('value', value);
  },
  placeholder: 'Select working status',
};

// LeftIcon
export const LeftIcon = Template.bind({});
LeftIcon.args = {
  width: '400px',
  options,
  leftIcon: <AlphaBCircle boxSize="5" />,
  getValueCallback: (value) => {
    console.log('value', value);
  },
  placeholder: 'Select working status',
};
// WithLabel
export const WithLabel = Template.bind({});
WithLabel.args = {
  width: '400px',
  options,
  leftIcon: <AlphaBCircle boxSize="5" />,
  getValueCallback: (value) => {
    console.log('value', value);
  },
  placeholder: 'Select working status',
  label: 'Select working status:',
};

// TwelfthPassYearsList
export const TwelfthPassYearsList = Template.bind({});
TwelfthPassYearsList.args = {
  width: '400px',
  options: [
    {
      text: 'Not Completed',
    },
  ],
  appendTwelfthPassYearsInOptions: true,
  leftIcon: <AlphaBCircle boxSize="5" />,
  getValueCallback: (value) => {
    console.log('value', value);
  },
  placeholder: 'Select working status',
  label: 'Select working status:',
};

// GraduationPassYearsList
export const GraduationPassYearsList = Template.bind({});
GraduationPassYearsList.args = {
  width: '400px',
  options: [
    {
      text: 'Not Completed',
    },
  ],
  appendGraduationPassYearsInOptions: true,
  leftIcon: <AlphaBCircle boxSize="5" />,
  getValueCallback: (value) => {
    console.log('value', value);
  },
  placeholder: 'Select working status',
  label: 'Select working status:',
};
