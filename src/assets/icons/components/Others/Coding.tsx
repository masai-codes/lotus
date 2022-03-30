import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const TrashCanOutline = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M8.293 6.293L2.586 12L8.293 17.707L9.707 16.293L5.414 12L9.707 7.707L8.293 6.293ZM15.707 17.707L21.414 12L15.707 6.293L14.293 7.707L18.586 12L14.293 16.293L15.707 17.707Z"
      fill="currentColor"
    />
  </Icon>
);

export default TrashCanOutline;
