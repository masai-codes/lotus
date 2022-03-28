import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  NotificationBadge,
  Props,
} from '../../src/components/NotificationBadge/NotificationBadge';
const meta: Meta = {
  title: 'Components/NotificationBadge',
  component: NotificationBadge,
  argTypes: {},
};
export default meta;

const Template: Story<Props> = (args) => <NotificationBadge {...args} />;

/** Variant Stories  *************************************************************/

// Without Badge
export const WithoutBadge = Template.bind({});
WithoutBadge.args = {
  size: '64px',
};

// With Badge
export const WithBadge = Template.bind({});
WithBadge.args = {
  size: '64px',
  hasBadge: true,
};

// With Custom badge color
export const CustomBadgeColor = Template.bind({});
CustomBadgeColor.args = {
  size: '64px',
  hasBadge: true,
  badgeColor: 'green',
};
