import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tooltip, Props } from '../../src/components/Tooltip/Tooltip';
import { BookIcon } from '../../src/assets/icons/components';
import { Button } from '@chakra-ui/react';
const meta: Meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: [
        'left',
        'right',
        'top',
        'bottom',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
      ],
    },
  },
};
export default meta;

const Template: Story<Props> = (args) => <Tooltip {...args} />;

/** Variant Stories  *************************************************************/

// WithTitle
export const WithTitle = Template.bind({});
WithTitle.args = {
  type: 'right',
  title: 'Caption',
  body: 'WithTitle content',
  trigger: <Button>Hover</Button>,
};

// WithoutTitle
export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  type: 'right',
  body: 'WithoutTitle content',
  trigger: <Button>Hover</Button>,
};
// Right
export const Right = Template.bind({});
Right.args = {
  type: 'right',
  title: 'Caption',
  body: 'Right content',
  trigger: <Button>Hover</Button>,
};

// Left
export const Left = Template.bind({});
Left.args = {
  type: 'left',
  title: 'Caption',
  body: 'Left Content',
  trigger: <Button ml={'200px'}>Hover</Button>,
};

// Top
export const Top = Template.bind({});
Top.args = {
  type: 'top',
  title: 'Caption',
  body: 'Top Content',
  trigger: <Button mt={'200px'}>Hover</Button>,
};

// Bottom
export const Bottom = Template.bind({});
Bottom.args = {
  type: 'bottom',
  title: 'Caption',
  body: 'Bottom Content',
  trigger: <Button ml={'200px'}>Hover</Button>,
};

// TopStart
export const TopStart = Template.bind({});
TopStart.args = {
  type: 'top-start',
  title: 'Caption',
  body: 'TopStart Content',
  trigger: <Button mt={'200px'}>Hover</Button>,
};

// TopEnd
export const TopEnd = Template.bind({});
TopEnd.args = {
  title: 'Caption',
  body: 'TopEnd Content',
  trigger: (
    <Button mt={'200px'} ml={'200px'}>
      Hover
    </Button>
  ),
  type: 'top-end',
};

// BottomStart
export const BottomStart = Template.bind({});
BottomStart.args = {
  title: 'Caption',
  body: 'BottomStart Content',
  trigger: <Button ml={'200px'}>Hover</Button>,
  type: 'bottom-start',
};

// BottomEnd
export const BottomEnd = Template.bind({});
BottomEnd.args = {
  title: 'Caption',
  body: 'BottomEnd Content',
  trigger: <Button ml={'200px'}>Hover</Button>,
  type: 'bottom-end',
};
