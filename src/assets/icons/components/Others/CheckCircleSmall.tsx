import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const Add = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M11.5 3C6.825 3 3 6.825 3 11.5C3 16.175 6.825 20 11.5 20C16.175 20 20 16.175 20 11.5C20 6.825 16.175 3 11.5 3ZM9.8 15.75L5.55 11.5L6.7485 10.3015L9.8 13.3445L16.2515 6.893L17.45 8.1L9.8 15.75Z"
      fill="currentColor"
    />
  </Icon>
);

export default Add;
