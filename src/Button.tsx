import React, { HTMLAttributes, ReactNode } from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Provide a text for button */
  children: ReactNode;
  /** Which variant look would you like to use */
  variant: 'primary' | 'secondary';
}

/** This is a special button */
export const Button = ({ children, ...props }: Props) => {
  // return <ChakraButton {...props}>{children}</ChakraButton>;
  return <ChakraButton {...props}>{children}</ChakraButton>;
};
