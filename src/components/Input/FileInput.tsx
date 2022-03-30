import React from 'react';
import { Input, InputGroup } from '@chakra-ui/react';

interface Props {
  placeholder?: string;
  isRequired?: boolean;
}

export const FileInput = React.forwardRef<HTMLInputElement, Props>(
  ({}: Props, ref) => {
    FileInput.displayName = 'fileinput';
    return (
      <>
        <InputGroup>
          <Input
            type="file"
            ref={ref}
            sx={{
              border: 'none',
              _focus: {
                border: 'none',
              },
            }}
          />
        </InputGroup>{' '}
      </>
    );
  }
);
