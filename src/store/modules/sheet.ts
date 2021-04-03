/**
 * 리팩토링 급함
 */
import { nanoid } from 'nanoid';

const CREATE_SHEET = 'sheet/CREATE_SHEET' as const;

const CREATE_SECTION = 'sheet/CREATE_SECTION' as const;
const DELETE_SECTION = 'sheet/DELETE_SECTION' as const;

const CREATE_ITEM = 'sheet/CREATE_ITEM' as const;
const UPDATE_ITEM = 'sheet/UPDATE_ITEM' as const;
const DELETE_ITEM = 'sheet/DELETE_ITEM' as const;

// sheetList의 id와 매핑 할 목적으로 새 시트가 추가될 때 실행시켜서 새 시트를 만듦
export const createSheet = (sheetID: string) => ({
  type: CREATE_SHEET,
  sheetID,
});

export const createSection = (sheetID: string, sectionType: string) => ({
  type: CREATE_SECTION,
  sheetID,
  sectionID: nanoid(),
  itemID: nanoid(),
  sectionType,
});
// 만들자
export const deleteSection = (sheetID: string, sectionID: string) => ({
  type: DELETE_SECTION,
  sheetID,
  sectionID,
});

export const createItem = (
  sheetID: string,
  sectionID: string,
  payload: Payload
) => ({
  type: CREATE_ITEM,
  sheetID,
  sectionID,
  itemID: nanoid(),
  payload,
});
export const updateItem = (
  sheetID: string,
  sectionID: string,
  itemID: string,
  payload: Payload
) => ({
  type: UPDATE_ITEM,
  sheetID,
  sectionID,
  itemID,
  payload,
});
export const deleteItem = (
  sheetID: string,
  sectionID: string,
  itemID: string
) => ({
  type: DELETE_ITEM,
  sheetID,
  sectionID,
  itemID,
});

type Payload = {
  color?: string;
  text?: string;
  type?: string;
  variant?: string;
  css?: string;
};

type SheetAction =
  | ReturnType<typeof createSheet>
  | ReturnType<typeof createSection>
  | ReturnType<typeof deleteSection>
  | ReturnType<typeof createItem>
  | ReturnType<typeof updateItem>
  | ReturnType<typeof deleteItem>;

type SectionType = {
  id: string;
  sectionList: SheetType[];
};

export type SheetType = {
  id: string;
  type: string;
  itemList: ItemType[];
};

export type ItemType = Payload & {
  id: string;
};

type SheetState = SectionType[];
const initialState: SheetState = [
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

const reducer = (state: SheetState = initialState, action: SheetAction) => {
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

const generateSection = (sectionID: string, itemID: string, type: string) => {
  const sourceObj = {
    id: sectionID,
    type,
  };
  switch (type) {
    case 'colorScheme':
      return {
        ...sourceObj,
        itemList: [{ id: itemID, color: '#c1f1f3' }],
      };

    case 'typography':
      return {
        ...sourceObj,
        itemList: [
          {
            id: itemID,
            variant: 'h4',
            text: 'Example',
            css: '{ color: "tomato"; }',
          },
        ],
      };

    case 'button':
      return {
        ...sourceObj,
        itemList: [
          {
            id: itemID,
            text: 'Example',
            css: '{ color: "skyblue"; }',
          },
        ],
      };

    case 'customElement':
      return {
        ...sourceObj,
        itemList: [{ id: itemID, type: 'input', css: '{ color: "red"; }' }],
      };

    default:
      throw new Error();
  }
};

const generateItem = (
  sectionList: SheetType[],
  sectionID: string,
  itemID: string,
  payload: Payload
) =>
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

const patchItem = (
  sectionList: SheetType[],
  sectionID: string,
  itemID: string,
  payload: Payload
) =>
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

const removeItem = (
  sectionList: SheetType[],
  sectionID: string,
  itemID: string
) =>
  sectionList.map(section => {
    if (section.id !== sectionID) return section;
    return {
      ...section,
      itemList: section.itemList.filter(item => item.id !== itemID),
    };
  });
