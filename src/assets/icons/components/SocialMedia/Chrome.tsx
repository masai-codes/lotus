import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const Chrome = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M6.99994 12C6.99994 9.23859 9.23853 7 11.9999 7C12.7704 7 13.4915 7.18872 14.1434 7.5H23.1195C21.3385 3.104 17.0347 0 11.9999 0C8.14777 0 4.72864 1.82233 2.53296 4.64392L7.04236 12.4211C7.0304 12.28 6.99994 12.1442 6.99994 12Z"
      fill="#F44336"
    />
    <path
      d="M12 17.0001C9.38281 17.0001 7.25964 14.9822 7.04242 12.4212L2.53302 4.64404C0.951172 6.67682 0 9.22485 0 12.0001C0 18.0726 4.51489 23.0786 10.3684 23.8764L14.8195 16.1264C14.0164 16.6762 13.0467 17.0001 12 17.0001Z"
      fill="#00B060"
    />
    <path
      d="M14.1434 7.5C15.8276 8.30438 17 10.0091 17 12C17 13.7147 16.135 15.2255 14.8195 16.1263L10.3684 23.8763C10.9033 23.9492 11.4451 24 12 24C18.6274 24 24 18.6274 24 12C24 10.4073 23.6829 8.89056 23.1196 7.5H14.1434Z"
      fill="#FFC107"
    />
    <path
      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
      fill="#2196F3"
    />
    <path
      d="M16.4559 9.76105L23.1196 7.5H14.1434C15.1434 7.97754 15.955 8.77728 16.4559 9.76105Z"
      fill="url(#paint0_linear_3067_90448)"
    />
    <path
      d="M7.83306 9.26052L2.54309 4.62012L7.03116 12.3937C6.94475 11.2889 7.23153 10.1862 7.83306 9.26052Z"
      fill="url(#paint1_linear_3067_90448)"
    />
    <path
      d="M11.711 16.9786L10.3373 23.88L14.8253 16.1064C13.9118 16.7336 12.8134 17.0367 11.711 16.9786Z"
      fill="url(#paint2_linear_3067_90448)"
    />
    <path
      d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
      fill="url(#paint3_linear_3067_90448)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_3067_90448"
        x1="16.3875"
        y1="5.25597"
        x2="20.8755"
        y2="9.74403"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity="0.1" />
        <stop offset="1" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_3067_90448"
        x1="1.88411"
        y1="5.2791"
        x2="8.01492"
        y2="11.4099"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity="0.1" />
        <stop offset="1" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_3067_90448"
        x1="10.6388"
        y1="18.0507"
        x2="13.4027"
        y2="20.8146"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity="0.1" />
        <stop offset="1" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_3067_90448"
        x1="1.12171"
        y1="6.92737"
        x2="22.8783"
        y2="17.0726"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0.2" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </Icon>
);

export default Chrome;
