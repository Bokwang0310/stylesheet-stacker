import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header.jsx';
import FABContainer from './containers/FABContainer.jsx';
// import FAB from './components/FAB.jsx';
// import Home from './components/Home.jsx';
import HomeContainer from './containers/HomeContainer.jsx';
// import AddForm from './components/AddForm.jsx';
import AddFormContainer from './containers/AddFormContainer.jsx';

import { nanoid } from 'nanoid';
import { formatDate } from './utils.js';

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
  const [sheets, setSheets] = useState([
    {
      id: '1',
      name: 'Create your first book.',
      date: '2021/03/01',
      href: '/#/sheet/1'
    }
  ]);

  const removeSheet = id => setSheets(sheets.filter(sheet => sheet.id !== id));
  const addSheet = name => {
    const id = nanoid();
    setSheets([
      ...sheets,
      {
        id,
        name,
        date: formatDate(new Date()),
        href: `/#/sheet/${id}`
      }
    ]);
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const classes = useStyles();

  return (
    <>
      <Header classes={classes}></Header>
      <HomeContainer />
      <FABContainer classes={classes} />
      <AddFormContainer />
    </>
  );
}

export default App;
