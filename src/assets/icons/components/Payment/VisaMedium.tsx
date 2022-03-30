import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const VisaMedium = (props: Props) => (
  <Icon viewBox="0 0 34 24" {...props}>
    <path
      d="M0 6C0 2.68629 2.68629 0 6 0H40C43.3137 0 46 2.68629 46 6V26C46 29.3137 43.3137 32 40 32H6C2.68629 32 0 29.3137 0 26V6Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.3337 21.1443H11.5874L9.52796 13.0565C9.43022 12.6845 9.22267 12.3556 8.91737 12.2005C8.15547 11.811 7.31591 11.5009 6.40002 11.3446V11.0332H10.8241C11.4347 11.0332 11.8927 11.5009 11.969 12.0442L13.0375 17.8782L15.7825 11.0332H18.4525L14.3337 21.1443ZM19.979 21.1443H17.3853L19.521 11.0332H22.1147L19.979 21.1443ZM25.4703 13.8343C25.5466 13.2897 26.0046 12.9783 26.5388 12.9783C27.3784 12.9001 28.2929 13.0565 29.0562 13.4447L29.5141 11.2677C28.7509 10.9564 27.9113 10.8 27.1494 10.8C24.6321 10.8 22.8003 12.2005 22.8003 14.1443C22.8003 15.623 24.0978 16.3995 25.0137 16.8672C26.0046 17.3336 26.3862 17.645 26.3099 18.1114C26.3099 18.811 25.5466 19.1224 24.7847 19.1224C23.8688 19.1224 22.9529 18.8892 22.1147 18.4996L21.6568 20.6779C22.5727 21.0662 23.5635 21.2225 24.4794 21.2225C27.3021 21.2994 29.0562 19.9002 29.0562 17.8C29.0562 15.1553 25.4703 15.0003 25.4703 13.8343ZM38.1334 21.1443L36.074 11.0332H33.8619C33.404 11.0332 32.946 11.3446 32.7934 11.811L28.9798 21.1443H31.6498L32.1828 19.667H35.4634L35.7687 21.1443H38.1334ZM34.2435 13.7561L35.0054 17.5668H32.8697L34.2435 13.7561Z"
      fill="#172B85"
    />
    <path
      d="M6 1H40V-1H6V1ZM45 6V26H47V6H45ZM40 31H6V33H40V31ZM1 26V6H-1V26H1ZM6 31C3.23858 31 1 28.7614 1 26H-1C-1 29.866 2.13401 33 6 33V31ZM45 26C45 28.7614 42.7614 31 40 31V33C43.866 33 47 29.866 47 26H45ZM40 1C42.7614 1 45 3.23858 45 6H47C47 2.13401 43.866 -1 40 -1V1ZM6 -1C2.13401 -1 -1 2.13401 -1 6H1C1 3.23858 3.23858 1 6 1V-1Z"
      fill="#F3F2F2"
    />
  </Icon>
);

export default VisaMedium;