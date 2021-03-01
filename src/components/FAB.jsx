import { default as MuiFAB } from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function FloatingButton({ classes, openAddForm }) {
  return (
    <MuiFAB
      className={classes.fab}
      aria-label="add"
      color="secondary"
      onClick={() => openAddForm()}
    >
      <AddIcon />
    </MuiFAB>
  );
}

export default FloatingButton;
