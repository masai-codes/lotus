import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

export interface Props {}
import colors from '../../theme/foundations/colors';
export const Colors = () => {
  const colorsCodesMapping: { [key: string]: string }[] = [];
  for (let key in colors) {
    let value = colors[key];
    if (typeof value === 'string') {
      colorsCodesMapping.push({ key, value });
    } else {
      for (let colorNumber in value) {
        colorsCodesMapping.push({
          key: key + '.' + colorNumber,
          value: value[colorNumber],
        });
      }
    }
  }
  console.log(colorsCodesMapping);
  const renderColors = () => {
    return colorsCodesMapping.map((color) => {
      return (
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          border={'1px solid'}
          borderColor={'ms-grey.400'}
          mb={'16px'}
          borderRadius={'16px'}
          maxW={'300px'}
        >
          <Heading as="h5" color={'ms-grey.700'}>
            Color Name: {color.key}
          </Heading>
          <Heading as="h5" color={'ms-grey.700'}>
            Color Code: {color.value}
          </Heading>
          <Box
            color={color.key}
            width={'200px'}
            height={'50px'}
            mb={'24px'}
            bg={color.key}
          ></Box>
        </Flex>
      );
    });
  };
  return (
    <Box>
      <Heading as="h5" color={'ms-grey.700'}>
        Example:
      </Heading>
      <Heading as="h5" color={'ms-grey.700'} mb={'ms-16'}>
        <pre>{` <Box color={ms-red.900}></Box>`}</pre>
      </Heading>
      {renderColors()}
    </Box>
  );
};

export default Colors;
