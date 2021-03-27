import { formatDate, isEmptyString } from 'utils';

const ADD_SHEET = 'sheets/ADD_SHEET';
const UPDATE_SHEET = 'sheets/UPDATE_SHEET';
const REMOVE_SHEET = 'sheets/REMOVE_SHEET';

export const addSheet = (name, id) => ({
  type: ADD_SHEET,
  id,
  name,
  date: formatDate(new Date()),
});
export const removeSheet = id => ({ type: REMOVE_SHEET, id });
export const updateSheet = (id, name) => ({ type: UPDATE_SHEET, id, name });

const initialState = [
  {
    id: '1',
    name: 'Create your first book.',
    date: '2021/03/01',
    href: '/sheet/1',
  },
];

const reducers = (state = initialState, action) => {
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
