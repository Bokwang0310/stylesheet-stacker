import { atom } from 'recoil';
import { nanoid } from 'nanoid';

export type Item = {
  id: string;
  //   color?: string;
  //   text?: string;
  //   variant?: string;
  //   type?: string;
  //   css?: string;
}; // } & (ColorItem | TypographyItem | ButtonItem | CustomElementItem);

export type ColorItem = Item & {
  color: string;
};
export type TypographyItem = Item & {
  text: string;
  variant: string;
  css: string;
};
export type ButtonItem = Item & {
  text: string;
  css: string;
};
export type CustomElementItem = Item & {
  type: string;
  css: string;
};

export type Section = {
  id: string;
};
export type ColorSection = Section & {
  type: 'colorScheme';
  itemList: ColorItem[];
};
export type TypographySection = Section & {
  type: 'typography';
  itemList: TypographyItem[];
};
export type ButtonSection = Section & {
  type: 'button';
  itemList: ButtonItem[];
};
export type CustomElementSection = Section & {
  type: 'customElement';
  itemList: CustomElementItem[];
};

export type Sheet = {
  id: string;
  name: string;
  date: string;
  sectionList:
    | ColorSection[]
    | TypographySection[]
    | ButtonSection[]
    | CustomElementSection[];
};

// type CheckItemType = (section: Section) => section is ColorItem;
// export const checkItemType = (section: Section): section is  => {
//   section.itemList;
//   return "color" in section
// };

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
