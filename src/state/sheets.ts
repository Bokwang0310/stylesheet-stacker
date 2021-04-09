import { atom } from 'recoil';
import { nanoid } from 'nanoid';

export type Item = {
  id: string;
  //   color?: string;
  //   text?: string;
  //   variant?: string;
  //   type?: string;
  //   css?: string;
} & (ColorItem | TypographyItem | ButtonItem | CustomElementItem);

export type ColorItem = {
  color: string;
};
export type TypographyItem = {
  text: string;
  variant: string;
  css: string;
};
export type ButtonItem = {
  text: string;
  css: string;
};
export type CustomElementItem = {
  type: string;
  css: string;
};

export type Section = {
  id: string;
  type: string;
  itemList: Item[];
};

export type Sheet = {
  id: string;
  name: string;
  date: string;
  sectionList: Section[];
};

export const checkItemType = (section: Section) => {
  section.itemList;
};

export const sheetListState = atom<Sheet[]>({
  key: 'sheetState',
  default: [
    {
      id: '1',
      name: 'Create your own sheet!',
      date: '2021/03/10',
      sectionList: [
        {
          id: nanoid(),
          type: 'colorScheme',
          itemList: [{ id: nanoid(), color: '#C1F1F3' }],
        },
      ],
    },
  ],
});
