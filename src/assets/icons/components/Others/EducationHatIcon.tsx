import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}

export const EducationHatIcon = (props: Props) => (
  <Icon viewBox="0 0 22 18" {...props}>
    <path
      d="M11 0L0 6L4 8.18V14.18L11 18L18 14.18V8.18L20 7.09V14H22V6L11 0ZM17.82 6L11 9.72L4.18 6L11 2.28L17.82 6ZM16 13L11 15.72L6 13V9.27L11 12L16 9.27V13Z"
      fill="currentColor"
    />
  </Icon>
);

export default EducationHatIcon;
