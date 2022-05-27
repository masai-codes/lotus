import React, { HTMLAttributes, ReactNode } from 'react';
import { Button as ChakraButton, Spinner } from '@chakra-ui/react';

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
  loading?: boolean;
  position?:
    | 'inherit'
    | 'initial'
    | 'unset'
    | 'fixed'
    | 'absolute'
    | 'static'
    | 'relative'
    | 'sticky';
}

/** This is a special button */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onlyIcon,
  disabled,
  loading,
  position,
  ...props
}: Props) => {
  return (
    <ChakraButton
      disabled={disabled || loading}
      variant={variant}
      size={size}
      position={loading ? 'relative' : position ? position : 'static'}
      {...props}
    >
      {onlyIcon && React.cloneElement(onlyIcon)}
      {children}
      {loading && <Spinner position={'absolute'} color={'ms-blue.500'} />}
    </ChakraButton>
  );
};
