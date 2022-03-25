import React from 'react';
import { Text, Badge as ChakraBadge } from '@chakra-ui/react';
export interface Props {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  variant: string;
  label?: string;
  size?: 'default' | 'large';
}
export const Badge = ({ leftIcon, rightIcon, variant, label, size }: Props) => {
  return (
    <>
      <ChakraBadge
        variant={variant}
        size={size}
        d={'flex'}
        alignItems={'center'}
        w={'fit-content'}
      >
        {leftIcon && React.cloneElement(leftIcon, { boxSize: 4 })}
        {label ? ( // this will be rendered only if label prop is passed otherwise not.
          <Text ml={leftIcon ? 1 : 0} mr={rightIcon ? 1 : 0} textStyle="btn-sm">
            {label}
          </Text>
        ) : null}
        {rightIcon && React.cloneElement(rightIcon, { boxSize: 4 })}
      </ChakraBadge>
    </>
  );
};
