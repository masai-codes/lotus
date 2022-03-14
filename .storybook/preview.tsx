import { ChakraProvider } from '@chakra-ui/react';
import { StoryContext } from '@storybook/react';
import React, { Dispatch, SetStateAction } from 'react';
import { withPerformance } from 'storybook-addon-performance';
const withChakra = (StoryFn: Function, context: StoryContext) => {
  return (
    <ChakraProvider>
      <StoryFn />
    </ChakraProvider>
  );
};

export const decorators = [withChakra, withPerformance];
