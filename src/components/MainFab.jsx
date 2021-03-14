import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function MainFab({ classes, openAddForm }) {
  return (
    <Fab
      className={classes.fab}
      aria-label="add"
      color="secondary"
      onClick={() => openAddForm()}
    >
      <AddIcon />
    </Fab>
  );
}

export default MainFab;
