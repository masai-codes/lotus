import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const CalenderRange = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M9 10H7V12H9V10ZM13 10H11V12H13V10ZM17 10H15V12H17V10ZM19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3ZM19 19H5V8H19V19Z"
      fill="currentColor"
    />
  </Icon>
);

export default CalenderRange;