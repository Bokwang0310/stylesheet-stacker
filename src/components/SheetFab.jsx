import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

import { setOpenFab } from 'store/modules/sheetFab';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 3,
  },
}));

function SheetFab({ iconA, iconB }) {
  const open = useSelector(state => state.sheetFab.openFab);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <>
      <Zoom in={!open}>
        <Fab
          className={classes.fab}
          color="secondary"
          onClick={() => dispatch(setOpenFab(true))}
        >
          {iconA}
        </Fab>
      </Zoom>
      <Zoom in={open}>
        <Fab
          className={classes.fab}
          color="secondary"
          onClick={() => dispatch(setOpenFab(false))}
        >
          {iconB}
        </Fab>
      </Zoom>
    </>
  );
}

export default SheetFab;
