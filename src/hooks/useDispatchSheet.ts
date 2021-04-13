import { useRecoilState } from 'recoil';
import { sheetListState } from 'state/sheets';
import { Sheet } from 'state/types';

type Payload = {
  name?: string;
  date?: string;
};

export function useDispatchSection() {
  const [sheetList, setSheetList] = useRecoilState(sheetListState);

  const getSheetByID = (id: string) => {
    const targetSheet = sheetList.filter(sheet => {
      sheet.id === id;
    })[0];
    return targetSheet;
  };

  const createSheet = (newSheet: Sheet) => {
    const newSheetList = [...sheetList, newSheet];
    setSheetList(newSheetList);
  };

  const updateSheet = (id: string, payload: Payload) => {
    const newSheetList = sheetList.map(sheet => {
      if (sheet.id !== id) return sheet;
      return { ...sheet, ...payload };
    });

    setSheetList(newSheetList);
  };

  const deleteSheet = (id: string) => {
    const newSheetList = sheetList.filter(sheet => sheet.id !== id);
    setSheetList(newSheetList);
  };

  return { getSheetByID, createSheet, updateSheet, deleteSheet };
}
