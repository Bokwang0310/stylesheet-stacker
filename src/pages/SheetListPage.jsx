import { useDispatch, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';

import SheetLink from 'components/SheetLink';
import MainFab from 'components/MainFab';
import MainAddform from 'components/MainAddform';

import { addSheet } from 'store/modules/sheetList';

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
        handleSubmit={value => dispatch(addSheet(value))}
      >
        Plese enter the name of your style sheet.
      </MainAddform>
      <MainFab />
    </>
  );
}

export default SheetListPage;
