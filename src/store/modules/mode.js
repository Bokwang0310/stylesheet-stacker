/**
 * sheet 페이지의 수정 모드와 폼을 관리하는 파일
 * 파일 이름 수정 필요할 듯
 */
const SET_MODIFY_MODE = 'mode/SET_MODIFY_MODE';
const TOGGLE_MODIFY_MODE = 'mode/TOGGLE_MODIFY_MODE';

const SET_MODIFY_TARGET = 'mode/SET_MODIFY_TARGET';

const OPEN_ITEM_FORM = 'mode/OPEN_ITEM_FORM';
const CLOSE_ITEM_FORM = 'mode/CLOSE_ITEM_FORM';

export const setModifyMode = mode => ({ type: SET_MODIFY_MODE, mode });
export const toggleModifyMode = () => ({ type: TOGGLE_MODIFY_MODE });

export const setModifyTarget = sectionID => ({
  type: SET_MODIFY_TARGET,
  sectionID,
});

export const openItemForm = sectionID => ({ type: OPEN_ITEM_FORM, sectionID });
export const closeItemForm = () => ({ type: CLOSE_ITEM_FORM });

const initialState = {
  modifyMode: false,
  modifyTarget: null,
  openItemForm: false,
};

const reducer = (state = initialState, action) => {
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
