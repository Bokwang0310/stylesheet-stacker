import { useRecoilState } from 'recoil';
import { nanoid } from 'nanoid';
import { sheetListState } from 'state/sheets';
import { Sheet } from 'state/types';

export function useDispatchSection() {
  const [sheetList, setSheetList] = useRecoilState(sheetListState);

  const createSection = (sheetID: string, sectionType: string) => {
    const newSheetList = sheetList.map(sheet => {
      if (sheet.id !== sheetID) return sheet;

      return {
        ...sheet,
        sectionList: [
          ...sheet.sectionList,
          {
            type: sectionType,
            id: nanoid(),
            itemList: [],
          },
        ],
      } as Sheet;
    });

    setSheetList(newSheetList);
  };

  const deleteSection = (sheetID: string, sectionID: string) => {
    const newSheetList = sheetList.map(sheet => {
      if (sheet.id !== sheetID) return sheet;
      return {
        ...sheet,
        sectionList: sheet.sectionList.filter(
          section => section.id === sectionID
        ),
      };
    });

    setSheetList(newSheetList);
  };

  return { createSection, deleteSection };
}
