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
  position?:
    | 'inherit'
    | 'initial'
    | 'unset'
    | 'fixed'
    | 'absolute'
    | 'static'
    | 'relative'
    | 'sticky';
  loading?: boolean;
  //The speed of the spinner in case of loading=true, @example ```<Button loading loaderSpeeed="0.2s"/> ```
  loaderSpeed?: string;
  //The thickness of the spinner eg: thickness="4px"
  loaderThickness?: string;
  // default loaderSize is md
  loaderSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

/** This is a special button */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onlyIcon,
  disabled,
  position,
  loading,
  loaderSpeed,
  loaderThickness,
  loaderSize,
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
      {loading && (
        <Spinner
          speed={loaderSpeed ? loaderSpeed : '0.5s'}
          thickness={loaderThickness ? loaderThickness : '2px'}
          size={loaderSize ? loaderSize : 'md'}
          position={'absolute'}
          color={'ms-blue.500'}
        />
      )}
    </ChakraButton>
  );
};
