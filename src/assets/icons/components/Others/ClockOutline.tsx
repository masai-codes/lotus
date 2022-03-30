import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const ClockOutline = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M12 20C16.4 20 20 16.4 20 12C20 7.60001 16.4 4.00001 12 4.00001C7.6 4.00001 4 7.60001 4 12C4 16.4 7.6 20 12 20ZM12 2.00001C17.5 2.00001 22 6.50001 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.50001 6.5 2.00001 12 2.00001ZM17 13.9L16.3 15.2L11 12.3V7.00001H12.5V11.4L17 13.9Z"
      fill="currentColor"
    />
  </Icon>
);

export default ClockOutline;
