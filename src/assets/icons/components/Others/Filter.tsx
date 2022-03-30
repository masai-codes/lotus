import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const Filter = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M6 13H18V11H6V13ZM3 6V8H21V6H3ZM10 18H14V16H10V18Z"
      fill="currentColor"
    />
  </Icon>
);

export default Filter;
