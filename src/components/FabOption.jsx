import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
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

function FabOption({ isAdd, bottom }) {
  const style = useStyles(bottom)().option;
  return (
    <Slide in={!isAdd} direction="up" mountOnEnter unmountOnExit>
      <Fab className={style}>
        <CloseIcon />
      </Fab>
    </Slide>
  );
}

export default FabOption;
