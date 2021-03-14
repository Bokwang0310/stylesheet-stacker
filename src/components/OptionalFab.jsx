import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Slide from '@material-ui/core/Slide';

const useStyles = bottom =>
  makeStyles(theme => ({
    option: {
      position: 'fixed',
      bottom: theme.spacing(bottom),
      right: theme.spacing(2),
      zIndex: 2,
    },
  }));

function OptionalFab({ isAdd, bottom, children, onClick }) {
  const style = useStyles(bottom)().option;

  return (
    <Slide in={!isAdd} direction="up" mountOnEnter unmountOnExit>
      <Fab className={style} onClick={onClick}>
        {children}
      </Fab>
    </Slide>
  );
}

export default OptionalFab;
