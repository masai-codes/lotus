import React, { HTMLAttributes, ReactNode } from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Provide a text for button */
  children?: ReactNode;
  /** Which variant look would you like to use */
  variant?:
    | 'primary'
    | 'secondary'
    | 'secondary-grey'
    | 'tertiary'
    | 'tertiary-grey'
    | 'link'
    | 'social-media';
  size?: 'sm' | 'md' | 'lg' | 'block-sm' | 'block-md' | 'block-lg';
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  onlyIcon?: React.ReactElement;
  disabled?: boolean;
}

/** This is a special button */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onlyIcon,
  ...props
}: Props) => {
  return (
    <ChakraButton variant={variant} size={size} {...props}>
      {onlyIcon && React.cloneElement(onlyIcon)}
      {children}
    </ChakraButton>
  );
};
