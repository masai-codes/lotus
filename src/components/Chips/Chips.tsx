import React from 'react';
import { Text, Badge as ChakraBadge } from '@chakra-ui/react';
export interface Props {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  label?: string;
  disabled?: boolean;
  iconColor?: string;
}
export const Chips = ({
  leftIcon,
  rightIcon,
  label,
  disabled,
  iconColor,
  ...props
}: Props) => {
  return (
    <>
      <ChakraBadge
        d={'flex'}
        alignItems={'center'}
        w={'fit-content'}
        border="1px solid"
        borderColor={disabled ? 'ms-grey.300' : 'ms-grey.500'}
        cursor="pointer"
        bgColor={'#fff'}
        p={'4px 12px'}
        _hover={
          disabled
            ? { cursor: 'pointer' }
            : { bgColor: 'ms-grey.50', borderColor: 'ms-grey.900' }
        }
        _focus={
          disabled
            ? { cursor: 'pointer' }
            : {
                border: '2px solid',
                borderColor: 'ms-grey.400',
                color: 'ms-red.900',
              }
        }
        {...props}
      >
        {leftIcon &&
          React.cloneElement(leftIcon, {
            boxSize: 4,
            color: disabled
              ? 'ms-grey.400'
              : iconColor
              ? iconColor
              : 'ms-grey.800',
          })}
        {label ? ( // this will be rendered only if label prop is passed otherwise not.
          <Text
            ml={leftIcon ? 1 : 0}
            mr={rightIcon ? 1 : 0}
            textStyle="body2"
            color={disabled ? 'ms-grey.400' : 'ms-red.900'}
            _hover={disabled ? { cursor: 'pointer' } : { color: 'ms-grey.800' }}
          >
            {label}
          </Text>
        ) : null}
        {rightIcon &&
          React.cloneElement(rightIcon, {
            boxSize: 4,
            color: disabled
              ? 'ms-grey.400'
              : iconColor
              ? iconColor
              : 'ms-grey.800',
          })}
      </ChakraBadge>
    </>
  );
};
