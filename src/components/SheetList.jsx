import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';

import AddForm from 'containers/AddForm';
import FAB from 'containers/FAB';
import SheetLink from 'containers/SheetLink';

function Home({ classes, sheets }) {
  return (
    <>
      <Grid>
        <List>
          {sheets.map(sheet => {
            return <SheetLink key={sheet.id} sheet={sheet} />;
          })}
        </List>
      </Grid>
      <AddForm />
      <FAB classes={classes} />
    </>
  );
}

export default Home;
