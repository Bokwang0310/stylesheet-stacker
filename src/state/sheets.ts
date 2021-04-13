import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { nanoid } from 'nanoid';

import { Sheet } from './types';

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
