import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const Css = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path d="M4.5 21L3 2.25H21L19.5 21L12 23.25L4.5 21Z" fill="#1172B8" />
    <path d="M19.5 3.75H12V22.125L18 20.25L19.5 3.75Z" fill="#33AADD" />
    <path
      d="M14.625 13.125H7.125L6.75 10.5L12.75 8.625H6.75L6.375 6.375H18L17.625 9L12.75 10.875H17.25L16.5 18L12 19.5L7.5 18L7.125 14.25H9.375L9.75 16.125L12 16.875L14.25 16.125L14.625 13.125Z"
      fill="white"
    />
  </Icon>
);

export default Css;
