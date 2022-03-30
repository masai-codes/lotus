import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const CodeTag = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M9.9 16.6L5.3 12L9.9 7.4L8.5 6L2.5 12L8.5 18L9.9 16.6ZM15.1 16.6L19.7 12L15.1 7.4L16.5 6L22.5 12L16.5 18L15.1 16.6Z"
      fill="currentColor"
    />
  </Icon>
);

export default CodeTag;
