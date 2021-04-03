const SET_OPEN_FAB = 'sheetFab/SET_OPEN_FAB' as const;

export const setOpenFab = (open: boolean) => ({ type: SET_OPEN_FAB, open });

type SheetFabAction = ReturnType<typeof setOpenFab>;

type SheetFabState = { openFab: boolean };
const initialState: SheetFabState = {
  openFab: false,
};

const reducer = (
  state: SheetFabState = initialState,
  action: SheetFabAction
) => {
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
