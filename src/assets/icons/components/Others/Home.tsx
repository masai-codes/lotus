import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const TrashCanOutline = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M9 13H15V19H18V10L12 5.5L6 10V19H9V13ZM4 21V9L12 3L20 9V21H4Z"
      fill="currentColor"
    />
  </Icon>
);

export default TrashCanOutline;
