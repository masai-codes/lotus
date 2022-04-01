import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';

export interface Props {}
import textStyles from '../../theme/TextStyles';
export const TextStyles = () => {
  const allTextstyles: string[] = [];
  for (let key in textStyles) {
    allTextstyles.push(key);
  }
  const renderTextStyles = () => {
    return allTextstyles.map((textStyle) => {
      return (
        <Text key={textStyle} textStyle={textStyle}>
          {textStyle}
        </Text>
      );
    });
  };
  return (
    <Box>
      <Heading as="h5" color={'ms-grey.700'}>
        Example:
      </Heading>
      <Heading as="h5" color={'ms-grey.700'} mb={'ms-16'}>
        <pre>{`<Text textStyle='subtitle1'>Hello</Text>`}</pre>
      </Heading>
      {renderTextStyles()}
    </Box>
  );
};

export default TextStyles;
