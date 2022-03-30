import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}

export const CurrencyINR = (props: Props) => (
  <Icon viewBox="0 0 20 20" {...props}>
    <path
      d="M6.66683 2.5H15.0002L14.1668 4.16667H11.4502C11.8502 4.65 12.1502 5.21667 12.3252 5.83333H15.0002L14.1668 7.5H12.5002C12.2918 9.64167 10.6168 11.3583 8.50016 11.6333V11.6667H7.91683L12.9168 17.5H10.8335L5.8335 11.6667V10H7.91683C9.3835 10 10.6002 8.91667 10.8002 7.5H5.8335L6.66683 5.83333H10.5502C10.0835 4.85 9.0835 4.16667 7.91683 4.16667H5.8335L6.66683 2.5Z"
      fill="currentColor"
    />
  </Icon>
);

export default CurrencyINR;
