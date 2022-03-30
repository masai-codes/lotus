import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const Laptop = (props: Props) => (
  <Icon viewBox="0 0 20 20" {...props}>
    <path
      d="M3.88905 4.89575H16.1113V12.7083H3.88905V4.89575ZM16.1113 14.2708C16.5165 14.2708 16.9051 14.1061 17.1916 13.8131C17.4781 13.5201 17.639 13.1227 17.639 12.7083V4.89575C17.639 4.02856 16.9516 3.33325 16.1113 3.33325H3.88905C3.04113 3.33325 2.36127 4.02856 2.36127 4.89575V12.7083C2.36127 13.1227 2.52224 13.5201 2.80875 13.8131C3.09526 14.1061 3.48386 14.2708 3.88905 14.2708H0.833496V15.8333H19.1668V14.2708H16.1113Z"
      fill="currentColor"
    />
  </Icon>
);

export default Laptop;
