import { useRecoilState } from 'recoil';
import { nanoid } from 'nanoid';
import { sheetListState } from 'state/sheets';
import { defaultNewItem } from 'state/sheets';

const {
  colorItem,
  typographyItem,
  buttonItem,
  customElementItem,
} = defaultNewItem;

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
