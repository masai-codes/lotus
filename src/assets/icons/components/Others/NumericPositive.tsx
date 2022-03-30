import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const NumericPositive = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M13 6.99999V8.99999H15V17H17V6.99999H13ZM11 13H9V15H7V13H5V11H7V8.99999H9V11H11V13Z"
      fill="currentColor"
    />
  </Icon>
);

export default NumericPositive;
