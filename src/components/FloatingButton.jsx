import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function FloatingButton({ classes }) {
  return (
    <Fab className={classes.fab} aria-label="add" color="secondary">
      <AddIcon />
    </Fab>
  );
}

export default FloatingButton;
