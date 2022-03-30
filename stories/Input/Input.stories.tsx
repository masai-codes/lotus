import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, Props } from '../../src/components/Input/Input';
import {
  BookIcon,
  InformationOutline,
} from '../../src/assets/icons/components';
const meta: Meta = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    width: {
      control: { type: 'text' },
      defaultValue: '18.75rem',
    },
    label: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
};
export default meta;

const Template: Story<Props> = (args) => <Input {...args} />;

//  No Label
export const NoLabel = Template.bind({});
NoLabel.args = {
  type: 'text',
  placeholder: 'ayaan.chopra@domain.tld',
  getValueCallback: (val: string) => {
    console.log(val);
  },
};
//LeftIcon
export const LeftIcon = Template.bind({});
LeftIcon.args = {
  type: 'text',
  placeholder: 'ayaan.chopra@domain.tld',
  leftIcon: <BookIcon />,
  getValueCallback: (val: string) => {
    console.log(val);
  },
};

//Leading Dropdown
export const LeadingDropdown = Template.bind({});
LeadingDropdown.args = {
  type: 'text',
  leadingDropdown: true,
  placeholder: 'ayaan.chopra@domain.tld',
  getValueCallback: (val: string) => {
    console.log(val);
  },
  getDropdownValueCallback: (val: string) => {
    console.log(val);
  },
};

//Trailing Dropdown
export const TrailingDropdown = Template.bind({});
TrailingDropdown.args = {
  type: 'text',
  trailingDropdown: true,
  placeholder: 'ayaan.chopra@domain.tld',
  getValueCallback: (val: string) => {
    console.log(val);
  },
  getDropdownValueCallback: (val: string) => {
    console.log(val);
  },
};

//Leading Text
export const LeadingText = Template.bind({});
LeadingText.args = {
  type: 'text',
  leadingText: 'https://',
  placeholder: 'ayaan.chopra@domain.tld',
  getValueCallback: (val: string) => {
    console.log(val);
  },
};

//RightIcon
export const RightIcon = Template.bind({});
RightIcon.args = {
  type: 'text',
  placeholder: 'ayaan.chopra@domain.tld',
  rightIcon: <BookIcon />,
  getValueCallback: (val: string) => {
    console.log(val);
  },
};
//BothSideIcon
export const BothSideIcon = Template.bind({});
BothSideIcon.args = {
  type: 'text',
  placeholder: 'ayaan.chopra@domain.tld',
  leftIcon: <BookIcon />,
  rightIcon: <InformationOutline />,
  getValueCallback: (val: string) => {
    console.log(val);
  },
};
//LeadingTextInfoIcon
export const LeadingTextInfoIcon = Template.bind({});
LeadingTextInfoIcon.args = {
  type: 'text',
  leadingText: 'https://',
  placeholder: 'ayaan.chopra@domain.tld',
  rightIcon: <InformationOutline />,
  getValueCallback: (val: string) => {
    console.log(val);
  },
  width: '400px',
};

//Disabled
export const Disabled = Template.bind({});
Disabled.args = {
  type: 'text',
  leadingText: 'https://',
  placeholder: 'ayaan.chopra@domain.tld',
  rightIcon: <InformationOutline />,
  getValueCallback: (val: string) => {
    console.log(val);
  },
  width: '400px',
  disabled: true,
};
//With Label
export const WithLabel = Template.bind({});
WithLabel.args = {
  type: 'text',
  label: 'Label',
  leadingText: 'https://',
  placeholder: 'ayaan.chopra@domain.tld',
  getValueCallback: (val: string) => {
    console.log(val);
  },
};
//With Hint
export const WithHint = Template.bind({});
WithHint.args = {
  type: 'text',
  label: 'Label',
  helperText: 'hint goes here',
  leadingText: 'https://',
  placeholder: 'ayaan.chopra@domain.tld',
  getValueCallback: (val: string) => {
    console.log(val);
  },
};
//  Password
export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: 'enter password',
  getValueCallback: (val: string) => {
    console.log(val);
  },
};
//PrefilledValue
export const PrefilledValue = Template.bind({});
PrefilledValue.args = {
  type: 'text',
  preFilledValue: 'pre filled value',
  placeholder: 'ayaan.chopra@domain.tld',
  getValueCallback: (val: string) => {
    console.log(val);
  },
};
//  Max Length
export const MaxLength = Template.bind({});
MaxLength.args = {
  type: 'text',
  placeholder: 'max length is 4',
  maxLength: 4,
  getValueCallback: (val: string) => {
    console.log(val);
  },
};
//IsInvalid
export const IsInvalid = Template.bind({});
IsInvalid.args = {
  isInvalid: true,
  type: 'text',
  label: 'Label',
  helperText: 'hint goes here',
  leadingText: 'https://',
  placeholder: 'ayaan.chopra@domain.tld',
  getValueCallback: (val: string) => {
    console.log(val);
  },
};
//  No Label
export const CustomWidth = Template.bind({});
CustomWidth.args = {
  width: '500px',
  type: 'text',
  placeholder: 'width is set 500px',
  getValueCallback: (val: string) => {
    console.log(val);
  },
};

//ErrorMessage
export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  isInvalid: true,
  errorMessage: 'Something went wrong!',
  type: 'text',
  label: 'Label',
  helperText: 'hint goes here',
  leadingText: 'https://',
  placeholder: 'ayaan.chopra@domain.tld',
  getValueCallback: (val: string) => {
    console.log(val);
  },
};
