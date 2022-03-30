import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}

const FormSelect = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M15 5H18L16.5 7L15 5ZM5 2H19C20.11 2 21 2.9 21 4V20C21 21.11 20.11 22 19 22H5C3.9 22 3 21.11 3 20V4C3 2.9 3.9 2 5 2ZM5 4V8H19V4H5ZM5 20H19V10H5V20ZM7 12H17V14H7V12ZM7 16H17V18H7V16Z"
      fill="currentColor"
    />
  </Icon>
);

export default FormSelect;
