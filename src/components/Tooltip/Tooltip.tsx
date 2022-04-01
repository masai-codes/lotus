import React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PlacementWithLogical,
} from '@chakra-ui/react';

export interface Props {
  title?: string;
  body: string;
  trigger: React.ReactElement;
  type?: PlacementWithLogical /* "right", "left", "top", "bottom", "top-start/end", "bottom-start/end" */;
}

export const Tooltip = ({ title, body, trigger, type }: Props) => {
  console.log(body.length);
  return (
    <Popover trigger="hover" offset={[0, 8]} placement={type}>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent w="max-content" maxWidth="300px" border="none">
        <PopoverArrow bg="ms-red.900" />
        {title && (
          <PopoverHeader
            borderRadius="8px 8px 0 0"
            bg="ms-red.900"
            color="white"
            textStyle="body2-md"
            border="none"
            px="ms-8"
            pt="ms-8"
            pb="none"
          >
            {title}
          </PopoverHeader>
        )}
        <PopoverBody
          borderRadius={title ? '0 0 8px 8px' : 'ms-8'}
          bg="ms-red.900"
          color="white"
          textStyle="caption"
          px="ms-8"
          pt="ms-4"
          pb={title ? 'ms-8' : 'ms-4'}
        >
          {body}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
