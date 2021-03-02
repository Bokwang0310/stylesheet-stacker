import { Switch, Route } from 'react-router-dom';
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
      <Switch>
        <Route path="/sheet/:id" component={Sheet} exact />
        <Route
          path="/"
          render={props => <Header {...props} classes={classes} />}
        />
      </Switch>
      <Route path="/sheets" component={SheetList} />
      <Route path="/setting" component={Setting} />
      <Route path="/pinned" component={Pinned} />
      <Route
        path={['/sheets', '/pinned']}
        render={props => <FAB {...props} classes={classes} />}
      />
      <AddForm />
    </>
  );
}

export default App;
