import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const Vue = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M1.5 3L12 21L22.5 3H18.375L12 13.875L5.625 3H1.5Z"
      fill="#41B883"
    />
    <path
      d="M5.625 3L12 13.875L18.375 3H14.625L12.049 7.50947L9.375 3H5.625Z"
      fill="#35495E"
    />
  </Icon>
);

export default Vue;
