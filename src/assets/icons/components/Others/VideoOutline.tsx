import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const VideoOutline = (props: Props) => (
  <Icon viewBox="0 0 16 16" {...props}>
    <path
      d="M10 5.33333V10.6667H3.33333V5.33333H10ZM10.6667 4H2.66667C2.48986 4 2.32029 4.07024 2.19526 4.19526C2.07024 4.32029 2 4.48986 2 4.66667V11.3333C2 11.5101 2.07024 11.6797 2.19526 11.8047C2.32029 11.9298 2.48986 12 2.66667 12H10.6667C10.8435 12 11.013 11.9298 11.1381 11.8047C11.2631 11.6797 11.3333 11.5101 11.3333 11.3333V9L14 11.6667V4.33333L11.3333 7V4.66667C11.3333 4.48986 11.2631 4.32029 11.1381 4.19526C11.013 4.07024 10.8435 4 10.6667 4Z"
      fill="currentColor"
    />
  </Icon>
);

export default VideoOutline;
