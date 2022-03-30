import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const Python = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.76229 1.5C8.11449 1.5 6.77869 2.7934 6.77869 4.38889V6.38889H11.9426V6.94444H4.4836C2.83581 6.94444 1.5 8.23784 1.5 9.83333L1.5 14.1667C1.5 15.7621 2.83581 17.0555 4.4836 17.0555H6.20492V14.6111C6.20492 13.0156 7.54072 11.7222 9.18852 11.7222H14.6967C16.091 11.7222 17.2213 10.6278 17.2213 9.27777V4.38889C17.2213 2.7934 15.8855 1.5 14.2377 1.5H9.76229ZM9.07377 5.05555C9.64416 5.05555 10.1066 4.60784 10.1066 4.05555C10.1066 3.50327 9.64416 3.05555 9.07377 3.05555C8.50337 3.05555 8.04098 3.50327 8.04098 4.05555C8.04098 4.60784 8.50337 5.05555 9.07377 5.05555Z"
      fill="url(#paint0_linear_1430_6072)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.2377 22.5C15.8855 22.5 17.2213 21.2066 17.2213 19.6111V17.6111L12.0574 17.6111L12.0574 17.0556L19.5164 17.0556C21.1642 17.0556 22.5 15.7622 22.5 14.1667V9.83335C22.5 8.23786 21.1642 6.94446 19.5164 6.94446L17.7951 6.94446V9.3889C17.7951 10.9844 16.4593 12.2778 14.8115 12.2778L9.30328 12.2778C7.90898 12.2778 6.77869 13.3722 6.77869 14.7222L6.77869 19.6111C6.77869 21.2066 8.11449 22.5 9.76229 22.5H14.2377ZM14.9262 18.9445C14.3558 18.9445 13.8934 19.3922 13.8934 19.9445C13.8934 20.4967 14.3558 20.9445 14.9262 20.9445C15.4966 20.9445 15.959 20.4967 15.959 19.9445C15.959 19.3922 15.4966 18.9445 14.9262 18.9445Z"
      fill="url(#paint1_linear_1430_6072)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1430_6072"
        x1="9.36065"
        y1="1.5"
        x2="9.36065"
        y2="17.0555"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#327EBD" />
        <stop offset="1" stopColor="#1565A7" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1430_6072"
        x1="14.6393"
        y1="6.94446"
        x2="14.6393"
        y2="22.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFDA4B" />
        <stop offset="1" stopColor="#F9C600" />
      </linearGradient>
    </defs>
  </Icon>
);

export default Python;