import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const ChevronUp = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M6.645 16.645L12 11.3017L17.355 16.645L19 15L12 8L5 15L6.645 16.645Z"
      fill="currentColor"
    />
  </Icon>
);

export default ChevronUp;
