import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const ChevronDown = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M6.645 8L12 13.355L17.355 8L19 9.65667L12 16.6567L5 9.65667L6.645 8Z"
      fill="currentColor"
    />
  </Icon>
);

export default ChevronDown;
