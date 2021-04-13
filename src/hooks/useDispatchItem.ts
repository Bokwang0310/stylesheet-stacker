import { useRecoilState } from 'recoil';
import { sheetListState } from 'state/sheets';
import { Item, Section } from 'state/sheets';

export function useDispatchItem() {
  const [sheetList, setSheetList] = useRecoilState(sheetListState);

  const createItem = (sheetID: string, sectionID: string, payload: Item) => {
    const newSheetList = sheetList.map(sheet => {
      if (sheet.id !== sheetID) return sheet;

      return {
        ...sheet,
        sectionList: sheet.sectionList.map(section => {
          if (section.id !== sectionID) return section;

          return {
            ...section,
            itemList: [...section.itemList, payload],
          } as Section;
        }),
      };
    });

    setSheetList(newSheetList);
  };

  const updateItem = (
    sheetID: string,
    sectionID: string,
    itemID: string,
    payload: Item
  ) => {
    const newSheetList = sheetList.map(sheet => {
      if (sheet.id !== sheetID) return sheet;

      return {
        ...sheet,
        sectionList: sheet.sectionList.map(section => {
          if (section.id !== sectionID) return section;

          return {
            ...section,
            itemList: section.itemList.map((item: Item) => {
              if (item.id !== itemID) return item;
              return {
                ...item,
                ...payload,
              };
            }),
          } as Section;
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
            itemList: (section.itemList as Item[]).filter(
              item => item.id === itemID
            ),
          } as Section;
        }),
      };
    });

    setSheetList(newSheetList);
  };

  return { createItem, updateItem, deleteItem };
}
