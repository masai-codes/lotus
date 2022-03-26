import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tab, Props } from '../../src/components/Tab/Tab';
const meta: Meta = {
  title: 'Components/Tab',
  component: Tab,
  argTypes: {
    activeType: {
      control: { type: 'radio' },
      options: ['pill', 'line'],
    },
  },
};
export default meta;

const Template: Story<Props> = (args) => <Tab {...args} />;

/** Variant Stories  *************************************************************/

// Pill
export const Pill = Template.bind({});
Pill.args = {
  activeType: 'pill',
  label: 'Label',
};

// Pill Active
export const PillActive = Template.bind({});
PillActive.args = {
  activeType: 'pill',
  label: 'Label',
  active: true,
};

// Line
export const Line = Template.bind({});
Line.args = {
  activeType: 'line',
  label: 'Label',
};

// Line
export const LineActive = Template.bind({});
LineActive.args = {
  activeType: 'line',
  label: 'Label',
  active: true,
};

// Pill Disabled
export const PillDisabled = Template.bind({});
PillDisabled.args = {
  activeType: 'pill',
  label: 'Label',
  disabled: true,
};

// Line Disabled
export const LineDisabled = Template.bind({});
LineDisabled.args = {
  activeType: 'line',
  label: 'Label',
  disabled: true,
};
