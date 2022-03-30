import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const SchoolOutline = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z"
      fill="currentColor"
    />
  </Icon>
);

export default SchoolOutline;
