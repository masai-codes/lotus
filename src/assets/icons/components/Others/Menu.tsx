import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const Menu = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z"
      fill="currentColor"
    />
  </Icon>
);

export default Menu;
