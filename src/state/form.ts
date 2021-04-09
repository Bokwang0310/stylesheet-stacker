import { atom } from 'recoil';

export const mainAddformState = atom<boolean>({
  key: 'mainAddformState',
  default: false,
});

export const sheetAddformState = atom<boolean>({
  key: 'sheetAddformState',
  default: false,
});

export const itemFormState = atom<boolean>({
  key: 'itemFormState',
  default: false,
});
