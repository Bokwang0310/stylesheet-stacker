import { useSelector, useDispatch } from 'react-redux';

import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

import { setOpenFab } from 'store/modules/sheetFab';
import useStyles from 'styles';
import { RootState } from '../store/modules';

function SheetFab({
  iconA,
  iconB,
}: {
  iconA: JSX.Element;
  iconB: JSX.Element;
}) {
  const open = useSelector((state: RootState) => state.sheetFab.openFab);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <>
      <Zoom in={!open}>
        <Fab
          className={classes.sheetFab}
          color="secondary"
          onClick={() => dispatch(setOpenFab(true))}
        >
          {iconA}
        </Fab>
      </Zoom>
      <Zoom in={open}>
        <Fab
          className={classes.sheetFab}
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
