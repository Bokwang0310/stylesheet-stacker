import { nanoid } from 'nanoid';
import { formatDate } from 'utils';

const ADD_SHEET = 'sheets/ADD_SHEET';
const REMOVE_SHEET = 'sheets/REMOVE_SHEET';

export const addSheet = name => ({ type: ADD_SHEET, name });
export const removeSheet = id => ({ type: REMOVE_SHEET, id });

const initialState = [
  {
    id: '1',
    name: 'Create your first book.',
    date: '2021/03/01',
    href: '/#/sheet/1'
  }
];

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHEET: {
      // impure
      const id = nanoid();
      return [
        ...state,
        {
          id,
          name: action.name,
          // impure
          date: formatDate(new Date()),
          href: `/#/sheet/${id}`
        }
      ];
    }

    case REMOVE_SHEET:
      return state.filter(sheet => sheet.id !== action.id);

    default:
      return state;
  }
};

export default reducers;
