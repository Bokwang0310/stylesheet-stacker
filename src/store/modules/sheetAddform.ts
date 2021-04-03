const SET_OPEN = 'sheetAddform/SET_OPEN' as const;
const SET_CLOSE = 'sheetAddform/SET_CLOSE' as const;

export const setOpen = () => ({ type: SET_OPEN });
export const setClose = () => ({ type: SET_CLOSE });

type SheetAddFormAction =
  | ReturnType<typeof setOpen>
  | ReturnType<typeof setClose>;

type SheetAddFormState = { open: boolean };
const initialState: SheetAddFormState = {
  open: false,
};

const reducer = (
  state: SheetAddFormState = initialState,
  action: SheetAddFormAction
) => {
  switch (action.type) {
    case SET_OPEN:
      return {
        ...state,
        open: true,
      };

    case SET_CLOSE:
      return {
        ...state,
        open: false,
      };

    default:
      return state;
  }
};

export default reducer;
