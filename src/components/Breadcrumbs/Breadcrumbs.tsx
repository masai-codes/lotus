import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React from 'react';
import { ChevronRight } from '../../assets/icons/components';

export interface Props {
  list?: { text: string; link: string; isSelected?: boolean }[];
}
export const Breadcrumbs = ({ list, ...props }: Props) => {
  return (
    <Breadcrumb
      separator={<ChevronRight boxSize="16px" />}
      px={['ms-16', 'ms-24']}
      spacing={['ms-4', 'ms-8']}
    >
      {list?.map((item) => (
        <BreadcrumbItem
          textStyle="caption"
          py="ms-8"
          color={item.isSelected ? 'ms-blue.500' : 'ms-grey.700'}
        >
          <BreadcrumbLink href={item.link}>{item.text}</BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
