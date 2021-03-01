import { makeStyles } from '@material-ui/core/styles';

import Header from 'components/Header';
import SheetList from 'containers/SheetList';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  moreButton: {
    marginLeft: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <Header classes={classes} />
      <SheetList classes={classes} />
    </>
  );
}

export default App;
