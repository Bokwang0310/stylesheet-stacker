import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

import Header from './components/Header.jsx';
import FloatingButton from './components/FloatingButton.jsx';

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header classes={classes}></Header>
      <FloatingButton classes={classes} />
    </ThemeProvider>
  );
}

export default App;
