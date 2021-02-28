import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';

import Item from './Item.jsx';

function Home({ items, onRemove }) {
  return (
    <Grid>
      <List>
        {items.map(item => {
          return <Item key={item.id} item={item} onRemove={onRemove} />;
        })}
      </List>
    </Grid>
  );
}

export default Home;
