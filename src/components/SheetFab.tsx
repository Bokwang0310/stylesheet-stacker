import { useRecoilState } from 'recoil';

import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

import useStyles from 'styles';
import { sheetFabState } from 'state/sheetFab';

type Props = {
  iconA: JSX.Element;
  iconB: JSX.Element;
};

function SheetFab({ iconA, iconB }: Props) {
  const [fabState, setFabState] = useRecoilState(sheetFabState);
  const classes = useStyles();

  return (
    <>
      <Zoom in={!fabState}>
        <Fab
          className={classes.sheetFab}
          color="secondary"
          onClick={() => setFabState(true)}
        >
          {iconA}
        </Fab>
      </Zoom>
      <Zoom in={fabState}>
        <Fab
          className={classes.sheetFab}
          color="secondary"
          onClick={() => setFabState(false)}
        >
          {iconB}
        </Fab>
      </Zoom>
    </>
  );
}

export default SheetFab;
