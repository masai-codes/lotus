import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const LightningBolt = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M11 9.47V11H14.76L13 14.53V13H9.24L11 9.47ZM13 1L6 15H11V23L18 9H13V1Z"
      fill="currentColor"
    />
  </Icon>
);

export default LightningBolt;
