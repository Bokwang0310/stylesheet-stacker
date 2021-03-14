import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

// import ListIcon from '@material-ui/icons/List';
// import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 3,
  },
}));

function SheetFab({ isA, setA, iconA, iconB }) {
  const classes = useStyles();

  return (
    <>
      <Zoom in={isA}>
        <Fab
          className={classes.fab}
          color="secondary"
          onClick={() => setA(false)}
        >
          {iconA}
        </Fab>
      </Zoom>
      <Zoom in={!isA}>
        <Fab
          className={classes.fab}
          color="secondary"
          onClick={() => setA(true)}
        >
          {iconB}
        </Fab>
      </Zoom>
    </>
  );
}

export default SheetFab;
