const SET_OPEN = 'addform/SET_OPEN';
const SET_CLOSE = 'addform/SET_CLOSE';

export const setOpen = () => ({ type: SET_OPEN });
export const setClose = () => ({ type: SET_CLOSE });

const initialState = {
  open: false,
};

const reducer = (state = initialState, action) => {
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
