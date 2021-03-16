import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 3,
  },
}));

function SheetFab({ open, setOpen, iconA, iconB }) {
  const classes = useStyles();

  return (
    <>
      <Zoom in={!open}>
        <Fab
          className={classes.fab}
          color="secondary"
          onClick={() => setOpen(true)}
        >
          {iconA}
        </Fab>
      </Zoom>
      <Zoom in={open}>
        <Fab
          className={classes.fab}
          color="secondary"
          onClick={() => setOpen(false)}
        >
          {iconB}
        </Fab>
      </Zoom>
    </>
  );
}

export default SheetFab;
