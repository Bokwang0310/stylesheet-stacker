import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { nanoid } from 'nanoid';

import {
  ButtonItem,
  ColorItem,
  CustomElementItem,
  Section,
  Sheet,
  TypographyItem,
} from './types';

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

// Sheet를 새로 만들 때 들어갈 더미 데이터
export const defaultNewSection: Section = {
  id: nanoid(),
  type: 'color',
  itemList: [{ id: nanoid(), color: '#ffffff' }],
};

// Section을 새로 만들 때 들어갈 여러 타입의 더미 데이터
type DefaultNewItem = {
  colorItem: ColorItem;
  typographyItem: TypographyItem;
  buttonItem: ButtonItem;
  customElementItem: CustomElementItem;
};
export const defaultNewItem: DefaultNewItem = {
  colorItem: {
    id: nanoid(),
    color: '#ffffff',
  },

  typographyItem: {
    id: nanoid(),
    variant: 'h6',
    text: 'Someday',
    css: '',
  },

  buttonItem: {
    id: nanoid(),
    text: '🙀',
    css: '',
  },

  customElementItem: {
    id: nanoid(),
    elementType: 'input',
    css: '',
  },
};
