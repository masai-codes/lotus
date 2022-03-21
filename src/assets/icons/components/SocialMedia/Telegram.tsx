import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const Telegram = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_2078_2105)" />
    <path
      d="M17.9885 7.0361C18.0954 6.3457 17.439 5.80076 16.8251 6.07028L4.59847 11.4384C4.15825 11.6317 4.19045 12.2985 4.64702 12.4439L7.16846 13.2469C7.64969 13.4001 8.17079 13.3209 8.59101 13.0306L14.2757 9.10309C14.4472 8.98466 14.634 9.22839 14.4876 9.3794L10.3956 13.5983C9.99863 14.0075 10.0774 14.701 10.5549 15.0004L15.1363 17.8734C15.6502 18.1956 16.3112 17.8719 16.4073 17.251L17.9885 7.0361Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2078_2105"
        x1="12"
        y1="0"
        x2="12"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#37BBFE" />
        <stop offset="1" stopColor="#007DBB" />
      </linearGradient>
    </defs>
  </Icon>
);

export default Telegram;
