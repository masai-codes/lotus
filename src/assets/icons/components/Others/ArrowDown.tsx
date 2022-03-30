import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const ArrowDown = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M11 4H13V16L18.5 10.5L19.92 11.92L12 19.84L4.07999 11.92L5.49999 10.5L11 16V4Z"
      fill="currentColor"
    />
  </Icon>
);

export default ArrowDown;
