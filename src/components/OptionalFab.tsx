import { useRecoilState } from 'recoil';

import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Fab from '@material-ui/core/Fab';

import { sheetFabState } from 'state/sheetFab';

type Props = {
  bottom: number;
  children: JSX.Element;
  onClick: () => void;
  disabled: boolean;
};

function OptionalFab({ bottom, children, onClick, disabled }: Props) {
  const [fabState, setFabState] = useRecoilState(sheetFabState);
  const classes = useStyles(bottom)();

  return (
    <Slide in={fabState} direction="up" mountOnEnter unmountOnExit>
      <Fab
        disabled={disabled}
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

OptionalFab.defaultProps = {
  disabled: false,
};

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
