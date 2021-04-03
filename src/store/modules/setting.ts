const CHANGE_PRIMARY_COLOR = 'setting/CHANGE_PRIMARY_COLOR' as const;
const CHANGE_SECONDARY_COLOR = 'setting/CHANGE_SECONDARY_COLOR' as const;
const TOGGLE_NIGHT_MODE = 'setting/TOGGLE_NIGHT_MODE' as const;

export const changePrimaryColor = (color: string) => ({
  type: CHANGE_PRIMARY_COLOR,
  color,
});
export const changeSecondaryColor = (color: string) => ({
  type: CHANGE_SECONDARY_COLOR,
  color,
});
export const toggleNightMode = () => ({
  type: TOGGLE_NIGHT_MODE,
});

type SettingAction =
  | ReturnType<typeof changePrimaryColor>
  | ReturnType<typeof changeSecondaryColor>
  | ReturnType<typeof toggleNightMode>;

type SettingState = {
  primaryColor: string;
  secondaryColor: string;
  nightMode: boolean;
};
const initialState: SettingState = {
  primaryColor: '#7e57c2',
  secondaryColor: '#7986cb',
  nightMode: false,
};

const reducer = (state: SettingState = initialState, action: SettingAction) => {
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
