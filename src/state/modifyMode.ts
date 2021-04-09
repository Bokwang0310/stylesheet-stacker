import { atom } from 'recoil';

export const modifyModeState = atom<boolean>({
  key: 'modifyMode',
  default: false,
});

export const modifyTargetState = atom<string>({
  key: 'modifyTarget',
  default: '',
});
