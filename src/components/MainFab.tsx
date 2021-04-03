import React from 'react';
import { useDispatch } from 'react-redux';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { setOpen } from '../store/modules/mainAddform';
import useStyles from '../styles';

function MainFab() {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Fab
      className={classes.mainFab}
      aria-label="add"
      color="secondary"
      onClick={() => dispatch(setOpen())}
    >
      <AddIcon />
    </Fab>
  );
}

export default MainFab;
