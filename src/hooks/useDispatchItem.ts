import { nanoid } from 'nanoid';
import { useRecoilState } from 'recoil';
import { sheetListState } from 'state/sheets';
import {
  ColorItem,
  TypographyItem,
  ButtonItem,
  CustomElementItem,
} from 'state/sheets';

type Payload = ColorItem | TypographyItem | ButtonItem | CustomElementItem;

export function useDispatchItem() {
  const [sheetList, setSheetList] = useRecoilState(sheetListState);

  const createItem = (sheetID: string, sectionID: string, payload: Payload) => {
    const newSheetList = sheetList.map(sheet => {
      if (sheet.id !== sheetID) return sheet;

      return {
        ...sheet,
        sectionList: sheet.sectionList.map(section => {
          if (section.id !== sectionID) return section;

          return {
            ...section,
            itemList: [...section.itemList, { id: nanoid(), ...payload }],
          };
        }),
      };
    });

    setSheetList(newSheetList);
  };

  const updateItem = (
    sheetID: string,
    sectionID: string,
    itemID: string,
    payload: Payload
  ) => {
    const newSheetList = sheetList.map(sheet => {
      if (sheet.id !== sheetID) return sheet;

      return {
        ...sheet,
        sectionList: sheet.sectionList.map(section => {
          if (section.id !== sectionID) return section;

          return {
            ...section,
            itemList: section.itemList.map(item => {
              if (item.id !== itemID) return item;
              return {
                ...item,
                payload,
              };
            }),
          };
        }),
      };
    });

    setSheetList(newSheetList);
  };

  const deleteItem = (sheetID: string, sectionID: string, itemID: string) => {
    const newSheetList = sheetList.map(sheet => {
      if (sheet.id !== sheetID) return sheet;

      return {
        ...sheet,
        sectionList: sheet.sectionList.map(section => {
          if (section.id !== sectionID) return section;

          return {
            ...section,
            itemList: section.itemList.filter(item => item.id === itemID),
          };
        }),
      };
    });

    setSheetList(newSheetList);
  };

  return { createItem, updateItem, deleteItem };
}
