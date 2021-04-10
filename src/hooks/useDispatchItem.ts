import { nanoid } from 'nanoid';
import { useRecoilState } from 'recoil';
import { sheetListState } from 'state/sheets';
import {
  ColorItem,
  TypographyItem,
  ButtonItem,
  CustomElementItem,
} from 'state/sheets';
import {
  ColorSection,
  TypographySection,
  ButtonSection,
  CustomElementSection,
} from 'state/sheets';

type Payload = ColorItem | TypographyItem | ButtonItem | CustomElementItem;
type Section =
  | ColorSection
  | TypographySection
  | ButtonSection
  | CustomElementSection;

export function useDispatchItem() {
  const [sheetList, setSheetList] = useRecoilState(sheetListState);

  const createItem = (sheetID: string, sectionID: string, payload: Payload) => {
    const newSheetList = sheetList.map(sheet => {
      if (sheet.id !== sheetID) return sheet;

      return {
        ...sheet,
        sectionList: sheet.sectionList.map((section: Section) => {
          if (section.id !== sectionID) return section;

          return {
            ...section,
            itemList: [...section.itemList, payload],
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
        sectionList: sheet.sectionList.map((section: Section) => {
          if (section.id !== sectionID) return section;

          return {
            ...section,
            itemList: section.itemList.map((item: Payload) => {
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
        sectionList: sheet.sectionList.map((section: Section) => {
          if (section.id !== sectionID) return section;

          return {
            ...section,
            itemList: section.itemList.filter(
              (item: Payload) => item.id === itemID
            ),
          };
        }),
      };
    });

    setSheetList(newSheetList);
  };

  return { createItem, updateItem, deleteItem };
}
