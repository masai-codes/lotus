/**
 * Generate DropDownItems list of last n years from the offset m years
 * total length is n
 */

import { ReactElement } from 'react';

type Options = {
  text: string;
  icon?: ReactElement | undefined;
}[];

export const createDropdownYears = (len: number, offset: number): Options => {
  const max: number = new Date().getFullYear() + offset;
  const min: number = max - len;
  const list: Options = [];
  for (let i: number = max; i > min; i--) {
    list.push({ text: i.toString() });
  }
  return list;
};

/** Generate DropDownItems list of last x years from the offset year */

export const twelfthPassYears: Options = createDropdownYears(15, 0);
export const graduationPassYears: Options = createDropdownYears(15, 4);
