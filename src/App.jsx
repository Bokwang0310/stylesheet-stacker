import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Header from 'components/Header';
import SheetList from 'containers/SheetList';
import Setting from 'components/Setting';
import Pinned from 'components/Pinned';
import Sheet from 'components/Sheet';
import FAB from 'containers/FAB';
import AddForm from 'containers/AddForm';

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
      <Route path="/" exact>
        <Redirect to="/sheets" />
      </Route>

      <Route path={['/sheets', '/pinned', '/setting']}>
        <Header classes={classes} />
      </Route>

      <Route path="/sheets">
        <SheetList />
      </Route>
      <Route path="/setting">
        <Setting />
      </Route>
      <Route path="/pinned">
        <Pinned />
      </Route>
      <Route path="/sheet/:id" component={Sheet} />

      <Route path={['/sheets', '/pinned']}>
        <FAB classes={classes} />
        <AddForm />
      </Route>
    </>
  );
}

export default App;
