import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const ChevronRight = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M8 17.355L13.355 12L8 6.645L9.65667 5L16.6567 12L9.65667 19L8 17.355Z"
      fill="currentColor"
    />
  </Icon>
);

export default ChevronRight;
