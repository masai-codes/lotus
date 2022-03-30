import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const Add = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor" />
  </Icon>
);

export default Add;
