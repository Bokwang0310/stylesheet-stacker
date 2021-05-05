import { atom } from 'recoil';

export const modifyModeState = atom<boolean>({
  key: 'modifyModeState',
  default: false,
});

export const modifyTargetState = atom<string>({
  key: 'modifyTargetState',
  default: '',
});
