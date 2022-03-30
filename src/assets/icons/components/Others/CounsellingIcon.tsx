import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}

export const CounsellingIcon = (props: Props) => (
  <Icon viewBox="0 0 69 71" {...props}>
    <svg width="69" height="71" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M34.4355 8.60889C40.7774 8.60889 45.9141 13.7455 45.9141 20.0874C45.9141 26.4293 40.7774 31.5659 34.4355 31.5659C28.0937 31.5659 22.957 26.4293 22.957 20.0874C22.957 13.7455 28.0937 8.60889 34.4355 8.60889ZM45.9141 38.8548C45.9141 41.8966 45.1106 48.9846 39.6296 56.9047L37.3052 43.0444L40.0026 37.6495C38.2234 37.4486 36.3582 37.3052 34.4355 37.3052C32.5129 37.3052 30.6476 37.4486 28.8685 37.6495L31.5659 43.0444L29.2415 56.9047C23.7605 48.9846 22.957 41.8966 22.957 38.8548C16.0986 40.8635 11.4785 44.4792 11.4785 48.7837V60.2622H57.3926V48.7837C57.3926 44.4792 52.8012 40.8635 45.9141 38.8548Z"
        fill="#CFD0EE"
      />
      <circle cx="63.1318" cy="64.4072" r="2.68848" stroke="#CFD0EE" />
      <circle cx="7.65234" cy="38.2617" r="2.05078" stroke="#B7B8E5" />
      <circle cx="3.82617" cy="33.1602" r="1.27539" fill="#CFD0EE" />
      <circle cx="47.1895" cy="7.65234" r="1.27539" fill="#CFD0EE" />
      <circle cx="59.3057" cy="27.4209" r="1.41309" stroke="#CFD0EE" />
      <rect
        x="20.4697"
        y="47.1895"
        width="2.38747"
        height="20.8903"
        rx="1.19373"
        transform="rotate(45 20.4697 47.1895)"
        fill="#B7B8E5"
      />
      <rect
        x="19.8735"
        y="53.7544"
        width="2.38747"
        height="20.8903"
        rx="1.19373"
        transform="rotate(45 19.8735 53.7544)"
        fill="#B7B8E5"
      />
      <rect
        x="54.6928"
        y="30.6094"
        width="0.800515"
        height="7.0045"
        rx="0.400257"
        transform="rotate(45 54.6928 30.6094)"
        fill="#B7B8E5"
      />
    </svg>
  </Icon>
);

export default CounsellingIcon;
