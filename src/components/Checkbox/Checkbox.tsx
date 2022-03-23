import React from 'react';
import { Box, Checkbox as ChakraCheckbox, Text } from '@chakra-ui/react';

export interface Props {
  value: string;
  label: string;
  support_label?: string;
  size?: 'regular' | 'large';
  color?: string;
  checked?: boolean;
  disabled?: boolean;
  isIndeterminate?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({
  size,
  color,
  checked,
  onChange,
  value,
  label,
  support_label,
  disabled,
  isIndeterminate,
}: Props) => {
  return (
    <>
      <Box>
        <ChakraCheckbox
          onChange={onChange}
          value={value}
          d="flex"
          alignItems={'start'}
          size={size === 'regular' ? 'md' : 'lg'}
          colorScheme={color ? color : 'ms-blue'}
          isDisabled={disabled}
          iconColor="white"
          isIndeterminate={isIndeterminate}
          _hover={
            !checked && !isIndeterminate && !disabled
              ? {
                  '& .chakra-checkbox__control': {
                    bg: 'ms-blue.50',
                    border: '2px solid #3470E4;',
                  },
                }
              : {}
          }
        >
          <Box mt={-1} d="flex" flexDirection={'column'}>
            <Text
              textStyle={size === 'regular' ? 'body2' : 'body1'}
              color="ms-red.900"
            >
              {label}
            </Text>
            {support_label ? (
              <Text textStyle="caption" color="ms-grey.700">
                {support_label}
              </Text>
            ) : null}
          </Box>
        </ChakraCheckbox>
      </Box>
    </>
  );
};

export default Checkbox;
