import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

export interface Props {}
export const Headings = () => {
  return (
    <Box>
      <Heading as="h5" color={'ms-grey.700'}>
        Example:
      </Heading>
      <Heading as="h5" color={'ms-grey.700'} mb={'ms-16'}>
        <pre>{`<Heading as="h1">I am h1</Heading>`}</pre>
      </Heading>
      <Heading as="h1" color={'ms-grey.700'} mb={'ms-8'}>
        I am h1
      </Heading>
      <Heading as="h2" color={'ms-grey.700'} mb={'ms-8'}>
        I am h2
      </Heading>
      <Heading as="h3" color={'ms-grey.700'} mb={'ms-8'}>
        I am h3
      </Heading>
      <Heading as="h4" color={'ms-grey.700'} mb={'ms-8'}>
        I am h4
      </Heading>
      <Heading as="h5" color={'ms-grey.700'} mb={'ms-8'}>
        I am h5
      </Heading>
      <Heading as="h6" color={'ms-grey.700'} mb={'ms-8'}>
        I am h6
      </Heading>
      <Heading as="body" color={'ms-grey.700'} mb={'ms-8'}>
        I am body
      </Heading>
    </Box>
  );
};
