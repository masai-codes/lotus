import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const Indeterminate = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M19 19V5H5V19H19ZM19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 3.89 3.9 3 5 3H19ZM17 11V13H7V11H17Z"
      fill="currentColor"
    />
  </Icon>
);

export default Indeterminate;
