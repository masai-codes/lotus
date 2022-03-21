import React from 'react';
import { Meta, Story } from '@storybook/react';
import BookIcon from '../../src/assets/BookIcon';
import { Button, Props } from '../../src/components/Button/Button';
const meta: Meta = {
  title: 'Components/Buttons/GeneralButton',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'secondary-grey',
        'tertiary',
        'tertiary-grey',
        'link',
      ],
    },
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
  },
};
export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

/** Variant Stories  *************************************************************/

// Primary
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'sm',
  children: 'Primary',
};

// Secondary
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'sm',
  children: 'Secondary',
};

// Secondary Grey
export const SecondaryGrey = Template.bind({});
SecondaryGrey.args = {
  variant: 'secondary-grey',
  size: 'sm',
  children: 'Secondary Grey',
};
// Tertiary
export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  size: 'sm',
  children: 'Tertiary',
};

// Tertiary Grey
export const TertiaryGrey = Template.bind({});
TertiaryGrey.args = {
  variant: 'tertiary-grey',
  size: 'sm',
  children: 'Tertiary Grey',
};

// Link
export const Link = Template.bind({});
Link.args = {
  variant: 'link',
  size: 'sm',
  children: 'Link',
};

/** Size Stories  *************************************************************/

// Small Size
export const SmallSize = Template.bind({});
SmallSize.args = {
  size: 'sm',
  children: 'Small Size',
};

// Medium Size
export const MediumSize = Template.bind({});
MediumSize.args = {
  size: 'md',
  children: 'Medium Size',
};

// Large Size
export const LargeSize = Template.bind({});
LargeSize.args = {
  size: 'lg',
  children: 'Large Size',
};

/** Icon Positon Stories  *************************************************************/

// No Icon
export const NoIcon = Template.bind({});
NoIcon.args = {
  children: 'No Icon',
};
// Left Icon
export const LeftIcon = Template.bind({});
LeftIcon.args = {
  leftIcon: <BookIcon />,
  children: 'Left Icon',
};

// Right Icon
export const RightIcon = Template.bind({});
RightIcon.args = {
  rightIcon: <BookIcon />,
  children: 'Right Icon',
};

// Only Icon
export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  onlyIcon: <BookIcon />,
};

/** Other Stories  *************************************************************/

// Disabled button
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled',
};
