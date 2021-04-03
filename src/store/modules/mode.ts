/**
 * sheet 페이지의 수정 모드와 폼을 관리하는 파일
 * 파일 이름 수정 필요할 듯
 */
const SET_MODIFY_MODE = 'mode/SET_MODIFY_MODE' as const;
const TOGGLE_MODIFY_MODE = 'mode/TOGGLE_MODIFY_MODE' as const;

const SET_MODIFY_TARGET = 'mode/SET_MODIFY_TARGET' as const;

const OPEN_ITEM_FORM = 'mode/OPEN_ITEM_FORM' as const;
const CLOSE_ITEM_FORM = 'mode/CLOSE_ITEM_FORM' as const;

export const setModifyMode = (mode: boolean) => ({
  type: SET_MODIFY_MODE,
  mode,
});
export const toggleModifyMode = () => ({ type: TOGGLE_MODIFY_MODE });

export const setModifyTarget = (sectionID: string) => ({
  type: SET_MODIFY_TARGET,
  sectionID,
});

export const openItemForm = () => ({
  type: OPEN_ITEM_FORM,
});
export const closeItemForm = () => ({ type: CLOSE_ITEM_FORM });

type ModeAction =
  | ReturnType<typeof setModifyMode>
  | ReturnType<typeof toggleModifyMode>
  | ReturnType<typeof setModifyTarget>
  | ReturnType<typeof openItemForm>
  | ReturnType<typeof closeItemForm>;

type ModeState = {
  modifyMode: boolean;
  modifyTarget: string | null;
  openItemForm: boolean;
};
const initialState = {
  modifyMode: false,
  modifyTarget: null,
  openItemForm: false,
};

const reducer = (state: ModeState = initialState, action: ModeAction) => {
  switch (action.type) {
    case SET_MODIFY_MODE:
      return {
        ...state,
        modifyMode: action.mode,
      };

    case TOGGLE_MODIFY_MODE:
      return {
        ...state,
        modifyMode: !state.modifyMode,
      };

    case SET_MODIFY_TARGET:
      return {
        ...state,
        modifyTarget: action.sectionID,
      };

    case OPEN_ITEM_FORM:
      return {
        ...state,
        openItemForm: true,
      };

    case CLOSE_ITEM_FORM:
      return {
        ...state,
        openItemForm: false,
      };

    default:
      return state;
  }
};

export default reducer;
