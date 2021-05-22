import { WritableDraft } from 'immer/dist/types/types-external';

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export const isVariant = (str: string): str is Variant => {
  if (
    str === 'h1' ||
    str === 'h2' ||
    str === 'h3' ||
    str === 'h4' ||
    str === 'h5' ||
    str === 'h6'
  ) {
    return true;
  }
  return false;
};

export type ColorItem = {
  id: string;
  color: string;
};
export type TypographyItem = {
  id: string;
  text: string;
  variant: Variant;
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

export type Item = ColorItem | TypographyItem | ButtonItem | CustomElementItem;

export enum SectionType {
  color = 'color',
  typography = 'typography',
  button = 'button',
  customElement = 'customElement',
}
export const isSectionType = (str: string): str is SectionType => {
  if (
    str === 'color' ||
    str === 'typography' ||
    str === 'button' ||
    str === 'customElement'
  )
    return true;

  return false;
};

export type ColorSection = {
  type: SectionType.color;
  id: string;
  itemList: ColorItem[];
};
export type TypographySection = {
  type: SectionType.typography;
  id: string;
  itemList: TypographyItem[];
};
export type ButtonSection = {
  type: SectionType.button;
  id: string;
  itemList: ButtonItem[];
};
export type CustomElementSection = {
  type: SectionType.customElement;
  id: string;
  itemList: CustomElementItem[];
};

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
