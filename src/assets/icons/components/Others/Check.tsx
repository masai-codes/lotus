import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const Check = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7Z"
      fill="currentColor"
    />
  </Icon>
);

export default Check;
