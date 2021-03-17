import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';

import SheetLink from 'components/SheetLink';

function SheetList() {
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
    </>
  );
}

export default SheetList;
