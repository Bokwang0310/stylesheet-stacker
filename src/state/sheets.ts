import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { nanoid } from 'nanoid';

export type Item = ColorItem | TypographyItem | ButtonItem | CustomElementItem;

export type ColorItem = {
  id: string;
  color: string;
};
export type TypographyItem = {
  id: string;
  text: string;
  variant: string;
  css: string;
};
export type ButtonItem = {
  id: string;
  text: string;
  css: string;
};
export type CustomElementItem = {
  id: string;
  elementType: string;
  css: string;
};

export type Section =
  | ColorSection
  | TypographySection
  | ButtonSection
  | CustomElementSection;

export type ColorSection = {
  type: 'color';
  id: string;
  itemList: ColorItem[];
};
export type TypographySection = {
  type: 'typography';
  id: string;
  itemList: TypographyItem[];
};
export type ButtonSection = {
  type: 'button';
  id: string;
  itemList: ButtonItem[];
};
export type CustomElementSection = {
  type: 'customElement';
  id: string;
  itemList: CustomElementItem[];
};

export type Sheet = {
  id: string;
  name: string;
  date: string;
  sectionList: (
    | ColorSection
    | TypographySection
    | ButtonSection
    | CustomElementSection
  )[];
};

const { persistAtom } = recoilPersist({
  key: 'sheets',
});

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
          type: 'color',
          itemList: [{ id: nanoid(), color: '#C1F1F3' }],
        },
      ],
    },
  ],
  effects_UNSTABLE: [persistAtom],
});
