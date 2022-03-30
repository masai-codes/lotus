import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const Warning = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M13 14H11V9H13V14ZM13 18H11V16H13V18ZM1 21H23L12 2L1 21Z"
      fill="currentColor"
    />
  </Icon>
);

export default Warning;
