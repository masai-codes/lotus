import React, { ReactElement, useEffect } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  FormLabel,
  VStack,
  Box,
} from '@chakra-ui/react';

import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { graduationPassYears, twelfthPassYears } from './yearsNew';
export interface Props {
  options: {
    text: string;
    icon?: ReactElement | undefined;
  }[];
  placeholder: string;
  label?: string;
  getValueCallback: (value: string) => void;
  errorMessage?: string;
  isInvalid?: boolean;
  disabled?: boolean;
  value?: string;
  leftIcon?: ReactElement | undefined;
  appendGraduationPassYearsInOptions?: boolean;
  appendTwelfthPassYearsInOptions?: boolean;
  width?: string;
}

export const Dropdown = ({
  label,
  options = [],
  placeholder,
  getValueCallback,
  errorMessage,
  isInvalid,
  disabled,
  value,
  leftIcon,
  appendGraduationPassYearsInOptions,
  appendTwelfthPassYearsInOptions,
  width,
}: Props) => {
  const [option, setOption] = React.useState<string>();

  const onClickHandler = (value: string): void => {
    setOption(value);
    getValueCallback(value);
  };

  if (appendGraduationPassYearsInOptions) {
    options = [...options, ...graduationPassYears];
  }
  if (appendTwelfthPassYearsInOptions) {
    options = [...options, ...twelfthPassYears];
  }
  useEffect(() => {
    if (value) {
      const val = options.find((item) => item.text === value);
      console.log(val);
      val && setOption(val.text);
    }
  }, [value]);

  return (
    <VStack align="flex-start">
      {label && (
        <FormLabel>
          <Text textStyle="body2-md" color="ms-red.900">
            {label}
          </Text>
        </FormLabel>
      )}
      <Box w={width ? width : 'full'}>
        <Menu gutter={8} matchWidth={true} autoSelect={false} flip={false}>
          {({ isOpen }) => (
            <>
              <MenuButton
                w="full"
                h="48px"
                isActive={isOpen}
                _disabled={{ color: 'ms-grey.500', bgColor: 'ms-grey.50' }}
                disabled={disabled}
                as={Button}
                textAlign="left"
                bgColor="white"
                borderRadius="ms-8"
                border="1px solid"
                borderColor={isInvalid ? 'ms-error' : '#CCCCCC'}
                _focus={{ borderColor: 'ms-blue.500' }}
                _hover={{ borderColor: 'ms-blue.500' }}
                _expanded={{ bg: 'white' }}
                leftIcon={leftIcon}
                rightIcon={
                  isOpen ? (
                    <ChevronUpIcon boxSize="6" />
                  ) : (
                    <ChevronDownIcon boxSize="6" />
                  )
                }
              >
                <Text
                  textStyle="body1"
                  color={!option ? 'ms-grey.400' : 'ms-grey.900'}
                  textTransform="none"
                >
                  {!option ? placeholder : option}
                </Text>
              </MenuButton>
              <MenuList
                minWidth="164px"
                borderRadius="ms-8"
                overflow="scroll"
                maxHeight="245px"
                zIndex="2"
                overflowX="hidden"
                overscrollX={'-moz-initial'}
                css={{
                  '::-webkit-scrollbar': {
                    width: '8px',
                  },

                  '::-webkit-scrollbar-thumb': {
                    background: '#D9D9D9',
                    borderRadius: '10px',
                  },
                }}
              >
                {options.length &&
                  options.map(({ text, icon }, idx) => {
                    //   console.log(option,value)

                    return (
                      <MenuItem
                        key={text}
                        icon={icon}
                        _hover={{
                          bgColor: 'ms-blue.50',
                          boxShadow: 'none',
                          color: 'ms-blue.500',
                          fontWeight: '600',
                        }}
                        onClick={() => onClickHandler(text)}
                        justifyContent="space-between"
                        closeOnSelect
                        textStyle={text === option ? 'body1-md' : 'body1'}
                        boxShadow={
                          options.length - 1 !== idx
                            ? '0px 1px 0px #D9D9D9'
                            : 'none'
                        }
                        h="48px"
                      >
                        {text}
                      </MenuItem>
                    );
                  })}
              </MenuList>
            </>
          )}
        </Menu>
      </Box>
      {isInvalid && (
        <Text color="ms-error" textStyle="body2">
          {errorMessage}
        </Text>
      )}
    </VStack>
  );
};
