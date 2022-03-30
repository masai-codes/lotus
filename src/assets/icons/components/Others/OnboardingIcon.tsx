import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}

export const OnboardingIcon = (props: Props) => (
  <Icon viewBox="0 0 80 62" {...props}>
    <svg
      width="80"
      height="62"
      viewBox="0 0 80 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="73.9712"
        y="4.13281"
        width="2.10665"
        height="17.3541"
        rx="1.05332"
        transform="rotate(45 73.9712 4.13281)"
        fill="#EEDBCF"
      />
      <rect
        x="74.2075"
        y="9.16357"
        width="3.41904"
        height="18.4332"
        rx="1.70952"
        transform="rotate(45 74.2075 9.16357)"
        fill="#EEDBCF"
      />
      <path
        d="M61.1242 5.1665H19.8167C16.975 5.1665 14.65 7.4915 14.65 10.3332L14.6242 56.8332L24.9575 46.4998H61.1242C63.9659 46.4998 66.2909 44.1748 66.2909 41.3332V10.3332C66.2909 7.4915 63.9659 5.1665 61.1242 5.1665ZM61.1242 41.3332H22.8134L19.7909 44.3557V10.3332H61.1242V41.3332ZM40.4575 25.8332C43.2992 25.8332 45.6242 23.5082 45.6242 20.6665C45.6242 17.8248 43.2992 15.4998 40.4575 15.4998C37.6159 15.4998 35.2909 17.8248 35.2909 20.6665C35.2909 23.5082 37.6159 25.8332 40.4575 25.8332ZM50.7909 34.694C50.7909 32.6015 49.5509 30.7415 47.6392 29.9148C45.4434 28.959 43.015 28.4165 40.4575 28.4165C37.9 28.4165 35.4717 28.959 33.2759 29.9148C31.3642 30.7415 30.1242 32.6015 30.1242 34.694V36.1665H50.7909V34.694Z"
        fill="#EEDBCF"
      />
      <rect
        x="22.5825"
        y="19.8398"
        width="1.96713"
        height="17.2124"
        rx="0.983567"
        transform="rotate(45 22.5825 19.8398)"
        fill="#E5C9B7"
      />
      <rect
        x="22.0913"
        y="25.249"
        width="1.96713"
        height="17.2124"
        rx="0.983567"
        transform="rotate(45 22.0913 25.249)"
        fill="#E5C9B7"
      />
      <circle cx="68.3048" cy="48.339" r="1.6017" stroke="#E5C9B7" />
      <circle cx="3.67797" cy="13.1355" r="3.67797" fill="#EEDBCF" />
      <circle cx="78.2882" cy="1.57627" r="1.07627" stroke="#E5C9B7" />
    </svg>
  </Icon>
);

export default OnboardingIcon;
