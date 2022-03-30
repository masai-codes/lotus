import { Icon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
  badge?: boolean;
  badgecolor?: string;
}

const NotificationBadge = (props: Props) => {
  const hoverStyle = {
    borderRadius: '50%',
    backgroundColor: 'ms-blue.50',
  };
  //  {...(hover ? hoverStyle : {})}

  return (
    <>
      {props.badge ? (
        <Box _hover={hoverStyle}>
          <Icon viewBox="0 0 32 32" {...props}>
            <path
              d="M15.5 26C16.61 26 17.5 25.11 17.5 24H13.5C13.5 25.11 14.4 26 15.5 26ZM22 16C21.84 16 21.67 16 21.5 16C21 16 20.5 15.92 20 15.79V21H11V14.5C11 12 13 10 15.5 10C15.68 10 15.85 10.03 16 10.05C16.1 9.06 16.45 8.14 17 7.37C16.92 6.6 16.28 6 15.5 6C14.67 6 14 6.67 14 7.5V8.18C11.13 8.86 9 11.43 9 14.5V20L7 22V23H24V22L22 20V16Z"
              fill="curentColor"
            />
            <path
              d="M21.5 14C23.43 14 25 12.43 25 10.5C25 8.57 23.43 7 21.5 7C19.57 7 18 8.57 18 10.5C18 12.43 19.57 14 21.5 14Z"
              fill={props.badgecolor}
            />
          </Icon>
        </Box>
      ) : (
        <Box _hover={hoverStyle}>
          <Icon viewBox="0 0 32 32" {...props}>
            <path
              d="M14 25H18C18 26.1 17.1 27 16 27C14.9 27 14 26.1 14 25ZM25 23V24H7V23L9 21V15C9 11.9 11 9.2 14 8.3V8C14 6.9 14.9 6 16 6C17.1 6 18 6.9 18 8V8.3C21 9.2 23 11.9 23 15V21L25 23ZM21 15C21 12.2 18.8 10 16 10C13.2 10 11 12.2 11 15V22H21V15Z"
              fill="curentColor"
            />
          </Icon>
        </Box>
      )}
    </>
  );
};

export default NotificationBadge;
