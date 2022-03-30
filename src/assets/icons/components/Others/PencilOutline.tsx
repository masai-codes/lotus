import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const PencilOutline = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M12.8311 9.33333L13.6667 10.1689L5.59556 18.2222H4.77778V17.4044L12.8311 9.33333ZM16.0311 4C15.8089 4 15.5778 4.08889 15.4089 4.25778L13.7822 5.88444L17.1156 9.21778L18.7422 7.59111C19.0889 7.24444 19.0889 6.66667 18.7422 6.33778L16.6622 4.25778C16.4844 4.08 16.2622 4 16.0311 4ZM12.8311 6.83556L3 16.6667V20H6.33333L16.1644 10.1689L12.8311 6.83556Z"
      fill="currentColor"
    />
  </Icon>
);

export default PencilOutline;
