import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const ArrowRight = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M4 11V13H16L10.5 18.5L11.92 19.92L19.84 12L11.92 4.08L10.5 5.5L16 11H4Z"
      fill="currentColor"
    />
  </Icon>
);

export default ArrowRight;
