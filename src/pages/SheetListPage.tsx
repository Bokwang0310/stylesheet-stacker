import { nanoid } from 'nanoid';
import { useRecoilState } from 'recoil';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';

import SheetLink from 'components/SheetLink';
import MainFab from 'components/MainFab';
import MainAddform from 'components/MainAddform';

import { isEmptyString, formatDate } from 'utils';
import { sheetListState } from 'state/sheets';

function SheetListPage() {
  const [sheetList, setSheetList] = useRecoilState(sheetListState);

  const createSheetLink = (name: string, id: string) => {
    if (isEmptyString(name)) return;

    const newSheetList = [
      ...sheetList,
      { id, name, date: formatDate(new Date()), sectionList: [] },
    ];
    setSheetList(newSheetList);
  };

  return (
    <>
      <Grid>
        <List>
          {sheetList.map(sheet => (
            <SheetLink key={sheet.id} sheet={sheet} />
          ))}
        </List>
      </Grid>
      <MainAddform
        title="Add Sheet"
        handleSubmit={(value: string) => {
          const id = nanoid();
          if (isEmptyString(value)) return;
          createSheetLink(value, id);
        }}
      >
        Plese enter the name of your style sheet.
      </MainAddform>
      <MainFab />
    </>
  );
}

export default SheetListPage;
