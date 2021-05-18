import { useRecoilState } from 'recoil';
import { sheetListState } from 'state/sheets';
import { Sheet } from 'state/types';

// Sheet 업데이트 시 변경시킬 수 있는 내용
type Payload = {
  name?: string;
  date?: string;
};

export function useDispatchSheet() {
  const [sheetList, setSheetList] = useRecoilState(sheetListState);

  const getSheetByID = (id: string) => {
    const targetSheet = sheetList.find(sheet => sheet.id === id);
    if (typeof targetSheet !== 'undefined') return targetSheet;
    throw new Error(`${id}에 해당하는 sheet를 찾을 수 없습니다.`);
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
