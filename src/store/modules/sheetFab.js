const SET_OPEN_FAB = 'sheetFab/SET_OPEN_FAB';
export const setOpenFab = open => ({ type: SET_OPEN_FAB, open });

const initialState = {
  openFab: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPEN_FAB:
      return {
        ...state,
        openFab: action.open,
      };

    default:
      return state;
  }
};

export default reducer;
