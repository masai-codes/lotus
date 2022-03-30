import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const VsCode = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M15.7513 2.33759C15.7513 1.67837 15.0132 1.67837 14.6852 1.76077C15.1444 1.3982 15.683 1.4861 15.8743 1.59597L20.3093 3.7706C20.7319 3.97781 21 4.40895 21 4.88143V19.1873C21 19.6661 20.7248 20.1019 20.2936 20.3057L16.1204 22.279C15.8333 22.4026 15.21 22.7075 14.6852 22.279C15.3413 22.4026 15.6966 21.9357 15.7513 21.6198V2.33759Z"
      fill="url(#paint0_linear_1430_6058)"
    />
    <path
      d="M14.7384 1.74884C15.0866 1.68003 15.7513 1.71194 15.7513 2.33755V7.26181L2.30519 17.4339C2.07016 17.6117 1.7394 17.5822 1.53922 17.3656L0.153399 15.866C-0.0637019 15.6311 -0.0485118 15.2634 0.187218 15.0474L14.6852 1.76072L14.7384 1.74884Z"
      fill="url(#paint1_linear_1430_6058)"
    />
    <path
      d="M15.7513 16.7779L2.30519 6.60586C2.07016 6.42806 1.7394 6.45755 1.53922 6.67417L0.153399 8.17372C-0.0637018 8.40864 -0.0485118 8.77636 0.187218 8.99239L14.6852 22.279V22.279C15.3413 22.4026 15.6967 21.9357 15.7513 21.6198V16.7779Z"
      fill="url(#paint2_linear_1430_6058)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1430_6058"
        x1="17.8426"
        y1="1.5"
        x2="17.8426"
        y2="22.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#32B5F1" />
        <stop offset="1" stopColor="#2B9FED" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1430_6058"
        x1="15.7513"
        y1="4.15039"
        x2="0.766277"
        y2="16.7287"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0F6FB3" />
        <stop offset="0.270551" stopColor="#1279B7" />
        <stop offset="0.421376" stopColor="#1176B5" />
        <stop offset="0.618197" stopColor="#0E69AC" />
        <stop offset="0.855344" stopColor="#0F70AF" />
        <stop offset="1" stopColor="#0F6DAD" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_1430_6058"
        x1="0.866412"
        y1="7.48776"
        x2="15.8093"
        y2="19.8605"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1791D2" />
        <stop offset="1" stopColor="#1173C5" />
      </linearGradient>
    </defs>
  </Icon>
);

export default VsCode;
