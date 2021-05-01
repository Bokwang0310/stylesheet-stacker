import { useRecoilValue } from 'recoil';
import { nanoid } from 'nanoid';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';

import SheetLink from 'components/SheetLink';
import MainFab from 'components/MainFab';
import MainAddform from 'components/MainAddform';

import { isEmptyString, formatDate } from 'utils';
import { defaultNewSection, sheetListState } from 'state/sheets';
import { useDispatchSheet } from 'hooks/useDispatchSheet';

function SheetListPage() {
  const sheetList = useRecoilValue(sheetListState);
  const { createSheet } = useDispatchSheet();

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
        handleSubmit={(sheetName: string) => {
          if (isEmptyString(sheetName)) return;
          createSheet({
            id: nanoid(),
            date: formatDate(new Date()),
            name: sheetName,
            sectionList: [defaultNewSection],
          });
        }}
      >
        Plese enter the name of your style sheet.
      </MainAddform>
      <MainFab />
    </>
  );
}

export default SheetListPage;
