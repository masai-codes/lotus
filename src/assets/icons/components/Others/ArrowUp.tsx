import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const ArrowUp = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M13 20H11V8L5.49999 13.5L4.07999 12.08L12 4.16L19.92 12.08L18.5 13.5L13 8V20Z"
      fill="currentColor"
    />
  </Icon>
);

export default ArrowUp;
