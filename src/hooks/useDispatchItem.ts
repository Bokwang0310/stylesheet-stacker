import { useRecoilState } from 'recoil';
import produce from 'immer';
import { sheetListState } from 'state/sheets';
import {
  ButtonItem,
  ColorItem,
  CustomElementItem,
  Item,
  Section,
  TypographyItem,
} from 'state/types';
import { WritableDraft } from 'immer/dist/types/types-external';

type DraftItemList =
  | WritableDraft<ColorItem>
  | WritableDraft<TypographyItem>
  | WritableDraft<ButtonItem>
  | WritableDraft<CustomElementItem>;

export function useDispatchItem() {
  const [sheetList, setSheetList] = useRecoilState(sheetListState);

  const createItem = (sheetID: string, sectionID: string, payload: Item) => {
    const newSheetList = produce(sheetList, draft => {
      const targetSection = draft
        .find(sheet => sheet.id === sheetID)
        ?.sectionList.find(section => section.id === sectionID);

      const targetItemList = targetSection?.itemList as DraftItemList[];

      targetItemList.push(payload);
    });

    setSheetList(newSheetList);
  };

  const updateItem = (
    sheetID: string,
    sectionID: string,
    itemID: string,
    payload: Item
  ) => {
    const newSheetList = produce(sheetList, draft => {
      const targetSheet = draft.find(sheet => sheet.id === sheetID);
      const targetSection = targetSheet?.sectionList.find(
        section => section.id === sectionID
      );
      const targetItemList = targetSection?.itemList as DraftItemList[];
      const targetItem = targetItemList.find(item => item.id === itemID);

      Object.assign(targetItem, payload);
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
