import { useRecoilState } from 'recoil';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Slide from '@material-ui/core/Slide';

import { sheetFabState } from 'state/sheetFab';

type Props = {
  bottom: number;
  children: JSX.Element;
  onClick: () => void;
};

function OptionalFab({ bottom, children, onClick }: Props) {
  const [fabState, setFabState] = useRecoilState(sheetFabState);
  const classes = useStyles(bottom)();

  return (
    <Slide in={fabState} direction="up" mountOnEnter unmountOnExit>
      <Fab
        className={classes.option}
        onClick={() => {
          setFabState(false);
          onClick();
        }}
      >
        {children}
      </Fab>
    </Slide>
  );
}

const useStyles = (bottom: number) =>
  makeStyles(theme => ({
    option: {
      position: 'fixed',
      bottom: theme.spacing(bottom),
      right: theme.spacing(2),
      zIndex: 2,
    },
  }));

export default OptionalFab;
