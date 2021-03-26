const CHANGE_PRIMARY_COLOR = 'setting/CHANGE_PRIMARY_COLOR';
const CHANGE_SECONDARY_COLOR = 'setting/CHANGE_SECONDARY_COLOR';
const TOGGLE_NIGHT_MODE = 'setting/TOGGLE_NIGHT_MODE';

export const changePrimaryColor = color => ({
  type: CHANGE_PRIMARY_COLOR,
  color,
});
export const changeSecondaryColor = color => ({
  type: CHANGE_SECONDARY_COLOR,
  color,
});
export const toggleNightMode = () => ({
  type: TOGGLE_NIGHT_MODE,
});

const initialState = {
  primaryColor: '#7e57c2',
  secondaryColor: '#7986cb',
  nightMode: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRIMARY_COLOR:
      return { ...state, primaryColor: action.color };

    case CHANGE_SECONDARY_COLOR:
      return { ...state, secondaryColor: action.color };

    case TOGGLE_NIGHT_MODE:
      return { ...state, nightMode: !state.nightMode };

    default:
      return state;
  }
};

export default reducer;
