import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BookIcon } from '../../src/assets/icons/components';
import { Button, Props } from '../../src/components/Button/Button';
import { Google } from '../../src/assets/icons/components';
const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'primary',
        'secondary',
        'secondary-grey',
        'tertiary',
        'tertiary-grey',
        'link',
        'social-media',
      ],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg', 'block-sm', 'block-md', 'block-lg'],
    },
    loading: {
      control: { type: 'radio' },
      options: [true, false],
    },
    loaderSize: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    loaderThickness: {
      control: { type: 'text' },
    },
    loaderSpeed: {
      control: { type: 'radio' },
      options: [
        '0.1s',
        '0.2s',
        '0.3s',
        '0.4s',
        '0.5s',
        '0.6s',
        '0.7s',
        '0.8s',
        '0.9s',
        '1s',
      ],
    },
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

// Small Size Block
export const SmallSizeBlock = Template.bind({});
SmallSizeBlock.args = {
  size: 'block-sm',
  children: 'Small Size Block',
};

// Medium Size Block
export const MediumSizeBlock = Template.bind({});
MediumSizeBlock.args = {
  size: 'block-md',
  children: 'Medium Size Block',
};
// Large Size Block
export const LargeSizeBlock = Template.bind({});
LargeSizeBlock.args = {
  size: 'block-lg',
  children: 'Large Size Block',
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

// Loading button
export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  children: 'Loading',
};

// Social Media
export const SocialMedia = Template.bind({});
SocialMedia.args = {
  variant: 'social-media',
  children: 'Continue with Google',
  leftIcon: <Google boxSize="6" />,
};

// Social Media Only Icon
export const SocialMediaOnlyIcon = Template.bind({});
SocialMediaOnlyIcon.args = {
  variant: 'social-media',
  onlyIcon: <Google boxSize="6" />,
};
