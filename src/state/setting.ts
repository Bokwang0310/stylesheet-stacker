import { atom } from 'recoil';

export const colorState = atom<[string, string]>({
  key: 'primaryColorState',
  default: ['#7E57C2', '#7986CB'],
});

export const nightModeState = atom<boolean>({
  key: 'nightModeState',
  default: false,
});
