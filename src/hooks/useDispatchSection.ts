import { useRecoilState } from 'recoil';
import produce from 'immer';
import { nanoid } from 'nanoid';
import { sheetListState, defaultNewItem } from 'state/sheets';
import { SectionType } from 'state/types';

const { colorItem, typographyItem, buttonItem, customElementItem } =
  defaultNewItem;

export function useDispatchSection() {
  const [sheetList, setSheetList] = useRecoilState(sheetListState);

  const isEmptySection = (sheetID: string) => {
    const targetSheet = sheetList.find(sheet => sheet.id === sheetID);
    return !targetSheet?.sectionList.length;
  };

  const getSectionByID = (sheetID: string, sectionID: string) => {
    const targetSheet = sheetList.find(sheet => sheet.id === sheetID);
    const targetSection = targetSheet?.sectionList.find(
      section => section.id === sectionID
    );

    return targetSection;
  };

  const createSection = (sheetID: string, sectionType: SectionType) => {
    const newSheetList = sheetList.map(sheet => {
      if (sheet.id !== sheetID) return sheet;

      switch (sectionType) {
        case SectionType.color:
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

        case SectionType.typography:
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

        case SectionType.button:
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

        case SectionType.customElement:
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

  return { getSectionByID, isEmptySection, createSection, deleteSection };
}
