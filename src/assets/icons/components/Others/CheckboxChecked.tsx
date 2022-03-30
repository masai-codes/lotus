import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const CheckboxChecked = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M10 17L5 12L6.41 10.58L10 14.17L17.59 6.58L19 8L10 17ZM19 3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 3.89 20.1 3 19 3Z"
      fill="currentColor"
    />
  </Icon>
);

export default CheckboxChecked;
