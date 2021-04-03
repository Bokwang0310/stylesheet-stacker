import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Slide from '@material-ui/core/Slide';

import { RootState } from 'store/modules';
import { setOpenFab } from 'store/modules/sheetFab';

const useStyles = (bottom: number) =>
  makeStyles(theme => ({
    option: {
      position: 'fixed',
      bottom: theme.spacing(bottom),
      right: theme.spacing(2),
      zIndex: 2,
    },
  }));

function OptionalFab({
  bottom,
  children,
  onClick,
}: {
  bottom: number;
  children: JSX.Element;
  onClick: () => void;
}) {
  const classes = useStyles(bottom)();
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.sheetFab.openFab);

  return (
    <Slide in={open} direction="up" mountOnEnter unmountOnExit>
      <Fab
        className={classes.option}
        onClick={() => {
          dispatch(setOpenFab(false));
          onClick();
        }}
      >
        {children}
      </Fab>
    </Slide>
  );
}

export default OptionalFab;
