import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const ChevronLeft = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M17 17.355L11.645 12L17 6.645L15.3433 5L8.34333 12L15.3433 19L17 17.355Z"
      fill="currentColor"
    />
  </Icon>
);

export default ChevronLeft;
