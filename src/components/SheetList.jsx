import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';

import SheetLink from 'containers/SheetLink';

function SheetList({ sheets }) {
  return (
    <>
      <Grid>
        <List>
          {sheets.map(sheet => (
            <SheetLink key={sheet.id} sheet={sheet} />
          ))}
          {sheets.map(sheet => (
            <SheetLink key={sheet.id} sheet={sheet} />
          ))}
          {sheets.map(sheet => (
            <SheetLink key={sheet.id} sheet={sheet} />
          ))}
          {sheets.map(sheet => (
            <SheetLink key={sheet.id} sheet={sheet} />
          ))}
          {sheets.map(sheet => (
            <SheetLink key={sheet.id} sheet={sheet} />
          ))}
          {sheets.map(sheet => (
            <SheetLink key={sheet.id} sheet={sheet} />
          ))}
          {sheets.map(sheet => (
            <SheetLink key={sheet.id} sheet={sheet} />
          ))}
          {sheets.map(sheet => (
            <SheetLink key={sheet.id} sheet={sheet} />
          ))}
          {sheets.map(sheet => (
            <SheetLink key={sheet.id} sheet={sheet} />
          ))}
          {sheets.map(sheet => (
            <SheetLink key={sheet.id} sheet={sheet} />
          ))}
          {sheets.map(sheet => (
            <SheetLink key={sheet.id} sheet={sheet} />
          ))}
          {sheets.map(sheet => (
            <SheetLink key={sheet.id} sheet={sheet} />
          ))}
          {sheets.map(sheet => (
            <SheetLink key={sheet.id} sheet={sheet} />
          ))}
          {sheets.map(sheet => (
            <SheetLink key={sheet.id} sheet={sheet} />
          ))}
          {sheets.map(sheet => (
            <SheetLink key={sheet.id} sheet={sheet} />
          ))}
          {sheets.map(sheet => (
            <SheetLink key={sheet.id} sheet={sheet} />
          ))}
          {sheets.map(sheet => (
            <SheetLink key={sheet.id} sheet={sheet} />
          ))}
          {sheets.map(sheet => (
            <SheetLink key={sheet.id} sheet={sheet} />
          ))}
          {sheets.map(sheet => (
            <SheetLink key={sheet.id} sheet={sheet} />
          ))}
          {sheets.map(sheet => (
            <SheetLink key={sheet.id} sheet={sheet} />
          ))}
          {sheets.map(sheet => (
            <SheetLink key={sheet.id} sheet={sheet} />
          ))}
        </List>
      </Grid>
    </>
  );
}

export default SheetList;
