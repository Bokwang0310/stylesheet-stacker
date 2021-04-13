import { atom } from 'recoil';
import { nanoid } from 'nanoid';

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
  sectionList:
    | ColorSection[]
    | TypographySection[]
    | ButtonSection[]
    | CustomElementSection[];
};

// export const isColorSection = (
//   item: ColorSection | TypographySection | ButtonSection | CustomElementSection
// ): item is ColorSection => {
//   return (item as ColorSection).type === 'color';
// };
// export const isTypographySection = (
//   item: ColorSection | TypographySection | ButtonSection | CustomElementSection
// ): item is TypographySection => {
//   return (item as TypographySection).type === 'typography';
// };
// export const isButtonSection = (
//   item: ColorSection | TypographySection | ButtonSection | CustomElementSection
// ): item is ButtonSection => {
//   return (item as ButtonSection).type === 'button';
// };
// export const isCustomElementSection = (
//   item: ColorSection | TypographySection | ButtonSection | CustomElementSection
// ): item is CustomElementSection => {
//   return (item as CustomElementSection).type === 'customElement';
// };
export const checkSectionType = <
  T extends
    | ColorSection
    | TypographySection
    | ButtonSection
    | CustomElementSection
>(
  section:
    | ColorSection
    | TypographySection
    | ButtonSection
    | CustomElementSection,
  targetType: string
): section is T => {
  return (section as T).type === targetType;
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
          type: 'color',
          itemList: [{ id: nanoid(), color: '#C1F1F3' }],
        },
      ],
    },
  ],
});
