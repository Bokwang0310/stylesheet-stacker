import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

import Subheader from 'components/Subheader';
import FabOption from 'components/FabOption';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(10),
      height: theme.spacing(10),
      backgroundColor: '#c1f1f3',
    },
  },
  title: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 3,
  },
}));

function Sheet({ match }) {
  const { id } = match.params;
  console.log(id);
  const classes = useStyles();

  const [isAdd, setAddState] = useState(true);

  return (
    <>
      <Box className={classes.list}>
        <List>
          <Subheader title="My Color Schemes" />
          <ListItem className={classes.root}>
            <Paper elevation={3} />
            <Paper elevation={3} />
            <Paper elevation={3} />
            <Paper elevation={3} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <Subheader title="AAAAAA" />
          {papers(5, classes.root)}
        </List>
        <Divider />
        <List>
          <Subheader title="BBBBBBB" />
          {papers(5, classes.root)}
        </List>
      </Box>
      <Zoom in={isAdd}>
        <Fab
          className={classes.fabButton}
          color="secondary"
          onClick={() => setAddState(false)}
        >
          <AddIcon />
        </Fab>
      </Zoom>
      <Zoom in={!isAdd}>
        <Fab
          className={classes.fabButton}
          color="default"
          onClick={() => setAddState(true)}
        >
          <CloseIcon color="secondary" />
        </Fab>
      </Zoom>
      <FabOption isAdd={isAdd} bottom={11} />
      <FabOption isAdd={isAdd} bottom={20} />
      <FabOption isAdd={isAdd} bottom={29} />
    </>
  );
}

function papers(count, rootClass) {
  let result = [];
  for (let i = 0; i < count; i++) {
    const jsx = (
      <ListItem className={rootClass} key={i}>
        <Paper elevation={3} />
        <Paper elevation={3} />
        <Paper elevation={3} />
        <Paper elevation={3} />
        <Paper elevation={3} />
        <Paper elevation={3} />
      </ListItem>
    );
    result.push(jsx);
  }
  return result;
}

export default Sheet;
