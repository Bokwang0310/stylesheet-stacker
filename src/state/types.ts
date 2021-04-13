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
