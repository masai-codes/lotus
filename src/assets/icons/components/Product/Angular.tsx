import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const Angular = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M10 0.5L0.25 4.25L1.75 17L10 21.5L18.25 17L19.75 4.25L10 0.5Z"
      fill="#DD0031"
    />
    <path d="M10 0.5V21.5L18.25 17L19.75 4.25L10 0.5Z" fill="#C3002F" />
    <path
      d="M10 2.8205L3.90497 16.523H6.17752L7.40282 13.457H12.5763L13.8016 16.523H16.0741L10 2.8205ZM11.7804 11.567H8.21968L10 7.2725L11.7804 11.567Z"
      fill="white"
    />
  </Icon>
);

export default Angular;
