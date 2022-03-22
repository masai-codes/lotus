import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { RadioGroup } from '@chakra-ui/react';
import { RadioButton, Props as RadioButtonProps } from './RadioButton';

export interface Props {
  options: RadioButtonProps[];
  onChange: (key: string) => void;
  selectedValue: string;
  commonSize?: 'regular' | 'large';
  disabled?: boolean;
  gridTemplateComlumns?:
    | string
    | { base?: string; md?: string; lg?: string; xl?: string };
  columnGap?: string | string[];
  rowGap?: string | string[];
}
export const RadioButtonGroup = ({
  options,
  onChange,
  selectedValue,
  commonSize,
  disabled,
  gridTemplateComlumns,
  rowGap,
  columnGap,
  ...props
}: Props) => {
  return (
    <>
      <Box>
        <RadioGroup
          onChange={onChange}
          value={selectedValue}
          isDisabled={disabled}
          {...props}
        >
          <SimpleGrid
            gridTemplateColumns={gridTemplateComlumns}
            rowGap={rowGap}
            columnGap={columnGap}
          >
            {options.map((option: RadioButtonProps) => {
              const finalSize: 'regular' | 'large' | undefined = option.size
                ? option.size
                : commonSize;
              return (
                <RadioButton
                  key={option.value}
                  label={option.label}
                  support_label={option.support_label}
                  value={option.value}
                  disabled={option.disabled}
                  size={finalSize}
                />
              );
            })}
          </SimpleGrid>
        </RadioGroup>
      </Box>
    </>
  );
};
