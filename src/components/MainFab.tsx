import { useSetRecoilState } from 'recoil';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import useStyles from 'styles';
import { mainAddformState } from 'state/form';

function MainFab() {
  const classes = useStyles();
  const setAddformState = useSetRecoilState(mainAddformState);

  return (
    <Fab
      className={classes.mainFab}
      aria-label="add"
      color="secondary"
      onClick={() => {
        setAddformState(true);
      }}
    >
      <AddIcon />
    </Fab>
  );
}

export default MainFab;
