import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AlertCircleOutline } from '../../src/assets/icons/components';
import { Badge, Props } from '../../src/components/Badge/Badge';
const meta: Meta = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['red', 'blue', 'purple', 'green', 'cyan', 'brick'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'large', 'default-icon-only', 'large-icon-only'],
    },
  },
};
export default meta;

const Template: Story<Props> = (args) => <Badge {...args} />;

/** Variant Stories  *************************************************************/

// Red
export const Red = Template.bind({});
Red.args = {
  variant: 'red',
  label: 'label',
};
// Blue
export const Blue = Template.bind({});
Blue.args = {
  variant: 'blue',
  label: 'label',
};
// Purple
export const Purple = Template.bind({});
Purple.args = {
  variant: 'purple',
  label: 'label',
};
// Green
export const Green = Template.bind({});
Green.args = {
  variant: 'green',
  label: 'label',
};
// Cyan
export const Cyan = Template.bind({});
Cyan.args = {
  variant: 'cyan',
  label: 'label',
};
// Brick
export const Brick = Template.bind({});
Brick.args = {
  variant: 'brick',
  label: 'label',
};

// Large
export const Large = Template.bind({});
Large.args = {
  variant: 'blue',
  label: 'label',
  size: 'large',
};

// Left Icon
export const LeftIcon = Template.bind({});
LeftIcon.args = {
  variant: 'blue',
  label: 'label',
  leftIcon: <AlertCircleOutline />,
};
// Right Icon
export const RightIcon = Template.bind({});
RightIcon.args = {
  variant: 'blue',
  label: 'label',
  rightIcon: <AlertCircleOutline />,
};

// Left Icon Large
export const LeftIconLarge = Template.bind({});
LeftIconLarge.args = {
  variant: 'blue',
  label: 'label',
  leftIcon: <AlertCircleOutline />,
  size: 'large',
};
// Right Icon Large
export const RightIconLarge = Template.bind({});
RightIconLarge.args = {
  variant: 'blue',
  label: 'label',
  rightIcon: <AlertCircleOutline />,
  size: 'large',
};

// Icon Only default size
export const IconOnly = Template.bind({});
IconOnly.args = {
  variant: 'blue',
  leftIcon: <AlertCircleOutline />,
  size: 'default-icon-only',
};

// Icon Only large size
export const IconOnlyLarge = Template.bind({});
IconOnlyLarge.args = {
  variant: 'blue',
  leftIcon: <AlertCircleOutline />,
  size: 'large-icon-only',
};
