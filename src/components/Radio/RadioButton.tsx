import React from 'react';
import { Radio } from '@chakra-ui/react';
import { Box, Text } from '@chakra-ui/react';
export interface Props {
  label?: string | React.ReactElement;
  support_label?: string;
  value?: string;
  size?: 'regular' | 'large';
  disabled?: boolean;
  extraReactElement?: React.ReactElement;
  extraReactElementValueOnClick?: (value: string) => void;
}
export const RadioButton = ({
  label,
  support_label,
  value,
  size = 'regular',
  disabled,
  extraReactElement,
  extraReactElementValueOnClick,
  ...props
}: Props) => {
  return (
    <Radio
      d="flex"
      alignItems={'start'}
      _checked={{
        bg: 'ms-blue.500',
      }}
      _hover={!disabled ? { borderColor: 'ms-blue.500' } : {}}
      _focus={!disabled ? { borderColor: 'ms-blue.500' } : {}}
      value={value}
      size={size === 'regular' ? 'md' : 'lg'}
      disabled={disabled}
      {...props}
    >
      <Box mt={-1} d="flex" flexDirection={'column'}>
        <Text
          color={disabled ? 'ms-grey.300' : 'ms-red.900'}
          textStyle={size === 'regular' ? 'body2' : 'body1'}
        >
          {label}
        </Text>
        {support_label ? (
          <Text
            textStyle="caption"
            color={disabled ? 'ms-grey.300' : 'ms-red.900'}
          >
            {support_label}
          </Text>
        ) : null}
      </Box>
      {extraReactElement &&
        value &&
        React.cloneElement(extraReactElement, {
          onClick: () => {
            extraReactElementValueOnClick &&
              extraReactElementValueOnClick(value);
          },
        })}
    </Radio>
  );
};
