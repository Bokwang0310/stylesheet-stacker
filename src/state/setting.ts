import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom: persistColors } = recoilPersist({
  key: 'colors',
});

const { persistAtom: persistNightMode } = recoilPersist({
  key: 'nightMode',
});

export const colorState = atom<[string, string]>({
  key: 'primaryColorState',
  default: ['#7E57C2', '#7986CB'],
  effects_UNSTABLE: [persistColors],
});

export const nightModeState = atom<boolean>({
  key: 'nightModeState',
  default: false,
  effects_UNSTABLE: [persistNightMode],
});
