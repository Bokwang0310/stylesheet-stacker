import { useRecoilState } from 'recoil';
import produce from 'immer';
import { sheetListState, defaultNewItem } from 'state/sheets';
import { nanoid } from 'nanoid';

const { colorItem, typographyItem, buttonItem, customElementItem } =
  defaultNewItem;

export function useDispatchSection() {
  const [sheetList, setSheetList] = useRecoilState(sheetListState);

  const createSection = (sheetID: string, sectionType: string) => {
    const newSheetList = sheetList.map(sheet => {
      if (sheet.id !== sheetID) return sheet;

      switch (sectionType) {
        case 'color':
          return {
            ...sheet,
            sectionList: [
              ...sheet.sectionList,
              {
                type: sectionType,
                id: nanoid(),
                itemList: [colorItem],
              },
            ],
          };

        case 'typography':
          return {
            ...sheet,
            sectionList: [
              ...sheet.sectionList,
              {
                type: sectionType,
                id: nanoid(),
                itemList: [typographyItem],
              },
            ],
          };

        case 'button':
          return {
            ...sheet,
            sectionList: [
              ...sheet.sectionList,
              {
                type: sectionType,
                id: nanoid(),
                itemList: [buttonItem],
              },
            ],
          };

        case 'customElement':
          return {
            ...sheet,
            sectionList: [
              ...sheet.sectionList,
              {
                type: sectionType,
                id: nanoid(),
                itemList: [customElementItem],
              },
            ],
          };

        default:
          throw new Error();
      }
    });

    setSheetList(newSheetList);
  };

  const deleteSection = (sheetID: string, sectionID: string) => {
    const newSheetList = produce(sheetList, draft => {
      const targetSectionList = draft.find(
        sheet => sheet.id === sheetID
      )?.sectionList;

      const index = targetSectionList?.findIndex(
        section => section.id === sectionID
      );

      // Handle
      if (typeof index !== 'number') return;

      targetSectionList?.splice(index, 1);
    });

    setSheetList(newSheetList);
  };

  return { createSection, deleteSection };
}
