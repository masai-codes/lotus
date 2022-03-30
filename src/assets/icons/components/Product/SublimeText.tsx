import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const SublimeText = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="10.5" fill="#4B4B4B" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.9983 12.0434C17.9983 11.8675 17.8633 11.7662 17.6977 11.8165L6.30067 15.295C6.13467 15.3457 6 15.5295 6 15.705V19.2601C6 19.4359 6.13467 19.5376 6.30067 19.487L17.6977 16.0088C17.8633 15.9581 17.9983 15.7743 17.9983 15.5985V12.0434V12.0434Z"
      fill="url(#paint0_linear_1430_6063)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 11.9319C6 12.1077 6.13467 12.2915 6.30067 12.3422L17.6993 15.821C17.8653 15.8717 18 15.77 18 15.5945V12.039C18 11.8635 17.8653 11.6797 17.6993 11.629L6.30067 8.15023C6.13467 8.09954 6 8.20092 6 8.37674V11.9319V11.9319Z"
      fill="#FF9800"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.9983 4.73986C17.9983 4.56404 17.8633 4.46234 17.6977 4.51303L6.30067 7.99116C6.13467 8.04185 6 8.22568 6 8.4015V11.9566C6 12.1324 6.13467 12.2338 6.30067 12.1834L17.6977 8.705C17.8633 8.65431 17.9983 8.47048 17.9983 8.29498V4.73986V4.73986Z"
      fill="#FF9800"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1430_6063"
        x1="12.6131"
        y1="17.1558"
        x2="13.8773"
        y2="13.9423"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF9700" />
        <stop offset="0.53" stopColor="#F48E00" />
        <stop offset="1" stopColor="#D06F00" />
      </linearGradient>
    </defs>
  </Icon>
);

export default SublimeText;
