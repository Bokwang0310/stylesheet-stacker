/**
 * 리팩토링 급함
 */
import { nanoid } from 'nanoid';

const CREATE_SHEET = 'sheet/CREATE_SHEET';

const CREATE_SECTION = 'sheet/CREATE_SECTION';
const DELETE_SECTION = 'sheet/DELETE_SECTION';

const CREATE_ITEM = 'sheet/CREATE_ITEM';
const UPDATE_ITEM = 'sheet/UPDATE_ITEM';
const DELETE_ITEM = 'sheet/DELETE_ITEM';

// sheetList의 id와 매핑 할 목적으로 새 시트가 추가될 때 실행시켜서 새 시트를 만듦
export const createSheet = sheetID => ({ type: CREATE_SHEET, sheetID });

export const createSection = (sheetID, sectionType) => ({
  type: CREATE_SECTION,
  sheetID,
  sectionID: nanoid(),
  itemID: nanoid(),
  sectionType,
});
// 만들자
export const deleteSection = (sheetID, sectionID) => ({
  type: DELETE_SECTION,
  sheetID,
  sectionID,
});

export const createItem = (sheetID, sectionID, payload) => ({
  type: CREATE_ITEM,
  sheetID,
  sectionID,
  itemID: nanoid,
  payload,
});
export const updateItem = (sheetID, sectionID, itemID, payload) => ({
  type: UPDATE_ITEM,
  sheetID,
  sectionID,
  itemID,
  payload,
});
export const deleteItem = (sheetID, sectionID, itemID) => ({
  type: DELETE_ITEM,
  sheetID,
  sectionID,
  itemID,
});

const initialState = [
  {
    id: '1',
    sectionList: [
      {
        id: nanoid(),
        type: 'colorScheme',
        itemList: [{ id: nanoid(), color: '#C1F1F3' }],
      },
    ],
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SHEET:
      return [
        ...state,
        {
          id: action.sheetID,
          sectionList: [],
        },
      ];

    case CREATE_SECTION:
      return state.map(sheet =>
        sheet.id !== action.sheetID
          ? sheet
          : {
              ...sheet,
              sectionList: [
                ...sheet.sectionList,
                generateSection(
                  action.sectionID,
                  action.itemID,
                  action.sectionType
                ),
              ],
            }
      );

    case DELETE_SECTION:
      return state.map(sheet =>
        sheet.id !== action.sheetID
          ? sheet
          : {
              ...sheet,
              sectionList: sheet.sectionList.filter(
                section => section.id !== action.sectionID
              ),
            }
      );

    case CREATE_ITEM:
      return state.map(sheet =>
        sheet.id !== action.sheetID
          ? sheet
          : {
              ...sheet,
              sectionList: generateItem(
                sheet.sectionList,
                action.sectionID,
                action.itemID,
                action.payload
              ),
            }
      );

    case UPDATE_ITEM:
      return state.map(sheet =>
        sheet.id !== action.sheetID
          ? sheet
          : {
              ...sheet,
              sectionList: patchItem(
                sheet.sectionList,
                action.sectionID,
                action.itemID,
                action.payload
              ),
            }
      );

    case DELETE_ITEM:
      return state.map(sheet =>
        sheet.id !== action.sheetID
          ? sheet
          : {
              ...sheet,
              sectionList: removeItem(
                sheet.sectionList,
                action.sectionID,
                action.itemID
              ),
            }
      );

    default:
      return state;
  }
};

export default reducer;

const generateSection = (sectionID, itemID, type) => {
  switch (type) {
    case 'colorScheme':
      return {
        id: sectionID,
        type,
        itemList: [{ id: itemID, color: '#c1f1f3' }],
      };

    case 'typography':
      return {
        id: sectionID,
        type,
        itemList: [
          {
            id: itemID,
            variant: 'h4',
            text: 'Example Typography',
            css: '{ color: "tomato"; }',
          },
        ],
      };

    case 'button':
      return {
        id: sectionID,
        type,
        itemList: [
          {
            id: itemID,
            text: 'Example Button',
            css: '{ color: "skyblue"; }',
          },
        ],
      };

    case 'customElement':
      return {
        id: sectionID,
        type,
        itemList: [{ id: itemID, type: 'input', css: '{ color: "red"; }' }],
      };

    default:
      throw new Error();
  }
};

const generateItem = (sectionList, sectionID, itemID, payload) =>
  sectionList.map(section => {
    if (section.id !== sectionID) return section;
    switch (section.type) {
      case 'colorScheme':
        return {
          ...section,
          itemList: [...section.itemList, { id: itemID, color: payload.color }],
        };

      case 'typography':
        return {
          ...section,
          itemList: [
            ...section.itemList,
            {
              id: itemID,
              variant: payload.variant,
              text: payload.text,
              css: payload.css,
            },
          ],
        };

      case 'button':
        return {
          ...section,
          itemList: [
            ...section.itemList,
            {
              id: itemID,
              text: payload.text,
              css: payload.css,
            },
          ],
        };

      case 'customElement':
        return {
          ...section,
          itemList: [
            ...section.itemList,
            {
              id: itemID,
              type: payload.type,
              css: payload.css,
            },
          ],
        };

      default:
        return section;
    }
  });

const patchItem = (sectionList, sectionID, itemID, payload) =>
  sectionList.map(section => {
    if (section.id !== sectionID) return section;

    const newItemList = section.itemList.map(item => {
      if (item.id !== itemID) return item;
      switch (section.type) {
        case 'colorScheme':
          return {
            ...item,
            color: payload.color,
          };

        case 'typography':
          return { ...item, ...payload };

        case 'button':
          return { ...item, ...payload };

        case 'customElement':
          return { ...item, ...payload };

        default:
          return item;
      }
    });

    return { ...section, itemList: newItemList };
  });

const removeItem = (sectionList, sectionID, itemID) =>
  sectionList.map(section => {
    if (section.id !== sectionID) return section;
    return {
      ...section,
      itemList: section.itemList.filter(item => item.id !== itemID),
    };
  });
