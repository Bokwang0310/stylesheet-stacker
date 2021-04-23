import { WritableDraft } from 'immer/dist/types/types-external';

export type SectionType = 'color' | 'typography' | 'button' | 'customElement';

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

export type Item = ColorItem | TypographyItem | ButtonItem | CustomElementItem;

export type Section =
  | ColorSection
  | TypographySection
  | ButtonSection
  | CustomElementSection;

export type Sheet = {
  id: string;
  name: string;
  date: string;
  sectionList: Section[];
};

// immer를 사용시 itemList의 타입이 깨질 때 단언하기 위함
export type DraftItemList =
  | WritableDraft<ColorItem>
  | WritableDraft<TypographyItem>
  | WritableDraft<ButtonItem>
  | WritableDraft<CustomElementItem>;

export type DraftSectionList =
  | WritableDraft<ColorSection>
  | WritableDraft<TypographySection>
  | WritableDraft<ButtonSection>
  | WritableDraft<CustomElementSection>;
