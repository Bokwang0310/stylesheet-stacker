import { formatDate, isEmptyString } from '../../utils';

const ADD_SHEET = 'sheets/ADD_SHEET' as const;
const UPDATE_SHEET = 'sheets/UPDATE_SHEET' as const;
const REMOVE_SHEET = 'sheets/REMOVE_SHEET' as const;

export const addSheet = (name: string, id: string) => ({
  type: ADD_SHEET,
  id,
  name,
  date: formatDate(new Date()),
});
export const removeSheet = (id: string) => ({ type: REMOVE_SHEET, id });
export const updateSheet = (id: string, name: string) => ({
  type: UPDATE_SHEET,
  id,
  name,
});

type SheetListAction =
  | ReturnType<typeof addSheet>
  | ReturnType<typeof removeSheet>
  | ReturnType<typeof updateSheet>;

export type SheetType = {
  id: string;
  name: string;
  date: string;
  href: string;
};

type SheetListState = SheetType[];
const initialState: SheetListState = [
  {
    id: '1',
    name: 'Create your first book.',
    date: '2021/03/01',
    href: '/sheet/1',
  },
];

const reducers = (
  state: SheetListState = initialState,
  action: SheetListAction
) => {
  switch (action.type) {
    case ADD_SHEET:
      if (isEmptyString(action.name)) return state;
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          date: action.date,
          href: `/sheet/${action.id}`,
        },
      ];

    case REMOVE_SHEET:
      return state.filter(sheet => sheet.id !== action.id);

    case UPDATE_SHEET:
      return isEmptyString(action.name)
        ? state
        : state.map(sheet =>
            sheet.id !== action.id ? sheet : { ...sheet, name: action.name }
          );

    default:
      return state;
  }
};

export default reducers;
