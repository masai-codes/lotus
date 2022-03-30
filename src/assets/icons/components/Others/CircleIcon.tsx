import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
  border?: string;
  borderColor?: string;
  borderRadius?: string;
}

export const CircleIcon = (props: Props) => (
  <Icon viewBox="0 0 8 8" {...props}>
    <circle cx="4" cy="4" r="4" fill="currentColor" />
  </Icon>
);

export default CircleIcon;
