import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';

import SheetLink from 'components/SheetLink';
import MainFab from 'components/MainFab';
import MainAddform from 'components/MainAddform';

import { createSheet } from 'store/modules/sheet';
import { addSheet } from 'store/modules/sheetList';
import { isEmptyString } from 'utils';

function SheetListPage() {
  const dispatch = useDispatch();
  const sheetList = useSelector(state => state.sheetList);

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
        handleSubmit={value => {
          const id = nanoid();
          dispatch(addSheet(value, id));
          if (isEmptyString(value)) return;
          dispatch(createSheet(id));
        }}
      >
        Plese enter the name of your style sheet.
      </MainAddform>
      <MainFab />
    </>
  );
}

export default SheetListPage;
