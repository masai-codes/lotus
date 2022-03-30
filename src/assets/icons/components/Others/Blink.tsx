import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}

export const BlinkInnerGreen = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <rect width="24" height="24" fill="white" />
    <circle opacity="0.1" cx="12" cy="12" r="1" fill="currentColor" />
    <circle cx="12" cy="12" r="4" fill="currentColor" />
  </Icon>
);

export const BlinkOuterGreen = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <rect width="24" height="24" fill="white" />
    <circle opacity="0.4" cx="12" cy="12" r="11" fill="currentColor" />
    <circle cx="12" cy="12" r="4" fill="currentColor" />
  </Icon>
);
