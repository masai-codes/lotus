import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
  fillColor?: string;
}
export const ClockCircleOutline = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="12" fill="currentColor" />
    <path
      d="M12.0003 18.6668C15.667 18.6668 18.667 15.6668 18.667 12.0001C18.667 8.33342 15.667 5.33342 12.0003 5.33342C8.33366 5.33342 5.33366 8.33342 5.33366 12.0001C5.33366 15.6668 8.33366 18.6668 12.0003 18.6668ZM12.0003 3.66675C16.5837 3.66675 20.3337 7.41675 20.3337 12.0001C20.3337 16.5834 16.5837 20.3334 12.0003 20.3334C7.41699 20.3334 3.66699 16.5834 3.66699 12.0001C3.66699 7.41675 7.41699 3.66675 12.0003 3.66675ZM16.167 13.5834L15.5837 14.6667L11.167 12.2501V7.83342H12.417V11.5001L16.167 13.5834Z"
      fill={props.fillColor ? props.fillColor : '#848081'}
    />
  </Icon>
);

export default ClockCircleOutline;
