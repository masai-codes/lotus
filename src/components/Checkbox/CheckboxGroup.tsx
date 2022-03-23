import React from 'react';
import {
  CheckboxGroup as ChakraCheckboxGroup,
  SimpleGrid,
} from '@chakra-ui/react';
import Checkbox from './Checkbox';
import { Props as CheckboxProps } from './Checkbox';

export interface Props {
  options: CheckboxProps[];
  commonSize?: 'regular' | 'large';
  onChange: (values: string[]) => void;
  selectedValues: string[];
  disabled?: boolean;
  gridTemplateComlumns?:
    | string
    | { base?: string; md?: string; lg?: string; xl?: string };
  columnGap?: string | string[];
  rowGap?: string | string[];
}

export const CheckboxGroup = ({
  options,
  commonSize,
  onChange,
  selectedValues,
  disabled,
  gridTemplateComlumns,
  rowGap,
  columnGap,
  ...props
}: Props) => {
  const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) {
      if (!selectedValues.includes(value)) {
        selectedValues = [...selectedValues, value];
      }
    } else {
      selectedValues = selectedValues.filter((el) => el !== value);
    }
    onChange([...selectedValues]);
  };

  return (
    <ChakraCheckboxGroup value={selectedValues} {...props}>
      <SimpleGrid
        gridTemplateColumns={gridTemplateComlumns}
        rowGap={rowGap}
        columnGap={columnGap}
      >
        {options.map((option: CheckboxProps) => {
          const finalSize: 'regular' | 'large' | undefined = option.size
            ? option.size
            : commonSize;
          return (
            <Checkbox
              key={option.value}
              size={finalSize}
              color="ms-blue"
              {...option}
              checked={selectedValues.includes(option.value)}
              onChange={onCheckboxChange}
              disabled={disabled}
            />
          );
        })}
      </SimpleGrid>
    </ChakraCheckboxGroup>
  );
};

export default CheckboxGroup;
