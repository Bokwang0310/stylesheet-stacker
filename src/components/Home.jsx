import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';

// import Item from './Item.jsx';
import ItemContainer from '../containers/ItemContainer.jsx';

function Home({ sheets }) {
  return (
    <Grid>
      <List>
        {sheets.map(sheet => {
          return <ItemContainer key={sheet.id} sheet={sheet} />;
        })}
      </List>
    </Grid>
  );
}

export default Home;
