import React from 'react';
import { Text } from '@chakra-ui/react';
export interface Props {
  activeType: 'pill' | 'line';
  label: string;
  active?: boolean;
  disabled?: boolean;
}

export const Tab = ({
  activeType,
  label,
  active,
  disabled,
  ...props
}: Props) => {
  let color = 'ms-grey.600';
  if (active) color = 'ms-blue.500';
  if (disabled) color = 'ms-grey.300';
  return (
    <Text
      textStyle="body2-md"
      width={'fit-content'}
      p={'8px 16px'}
      borderRadius={activeType === 'pill' ? 'ms-16' : ''}
      bgColor={active ? 'ms-blue.50' : ''}
      color={color}
      boxShadow={
        activeType === 'line' && active
          ? '0px 2px 0px 0px rgba(52, 112, 228, 1)'
          : ''
      }
      _hover={
        disabled
          ? { cursor: 'pointer' }
          : { color: 'ms-blue.500', cursor: 'pointer' }
      }
      {...props}
    >
      {label}
    </Text>
  );
};
