import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}

export const ShareAllIcon = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M11 4V0L18 7L11 14V9.9C6 9.9 2.5 11.5 0 15C1 10 4 5 11 4ZM17 3V0L24 7L17 14V11L21 7L17 3Z"
      fill="#3470E4"
    />
  </Icon>
);

export default ShareAllIcon;
