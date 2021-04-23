import { useRecoilState } from 'recoil';
import produce from 'immer';
import { sheetListState } from 'state/sheets';
import { Item, DraftItemList } from 'state/types';

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
    const newSheetList = produce(sheetList, draft => {
      const targetItemList = draft
        .find(sheet => sheet.id === sheetID)
        ?.sectionList.find(section => section.id === sectionID)
        ?.itemList as DraftItemList[];

      const index = targetItemList.findIndex(item => item.id === itemID);
      targetItemList.splice(index, 1);
    });

    setSheetList(newSheetList);
  };

  return { createItem, updateItem, deleteItem };
}
