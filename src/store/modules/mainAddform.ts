const SET_OPEN = 'addform/SET_OPEN' as const;
const SET_CLOSE = 'addform/SET_CLOSE' as const;

export const setOpen = () => ({ type: SET_OPEN });
export const setClose = () => ({ type: SET_CLOSE });
type MainAddformAction =
  | ReturnType<typeof setOpen>
  | ReturnType<typeof setClose>;

type MainAddformState = {
  open: boolean;
};
const initialState: MainAddformState = {
  open: false,
};

const reducer = (
  state: MainAddformState = initialState,
  action: MainAddformAction
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
