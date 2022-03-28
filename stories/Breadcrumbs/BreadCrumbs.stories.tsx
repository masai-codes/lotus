import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Breadcrumbs,
  Props,
} from '../../src/components/Breadcrumbs/Breadcrumbs';
const meta: Meta = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {},
};
export default meta;

const Template: Story<Props> = (args) => <Breadcrumbs {...args} />;

/** Variant Stories  *************************************************************/

// Example1
export const Example1 = Template.bind({});
Example1.args = {
  list: [
    { text: 'Courses', link: '#' },
    { text: 'Full Stack Web Development', link: '#', isSelected: true },
  ],
};

// Example2
export const Example2 = Template.bind({});
Example2.args = {
  list: [
    { text: 'Courses', link: '#' },
    { text: 'Full Stack Web Development', link: '#' },
    { text: 'Application Details', link: '#', isSelected: true },
  ],
};
