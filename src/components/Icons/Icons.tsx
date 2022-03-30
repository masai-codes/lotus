import React from 'react';
export interface Props {
  icon: React.ReactElement;
  size: string;
}

export const Icons = ({ icon, size }: Props) => {
  return (
    <>
      {React.cloneElement(icon, {
        boxSize: size ? size : '6',
      })}
    </>
  );
};
