import { useState } from 'react';

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme';

import Header from './components/Header.jsx';
import FloatingButton from './components/FloatingButton.jsx';
import Home from './components/Home.jsx';
import AddForm from './components/AddForm.jsx';

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
  const [items, setItems] = useState([
    {
      id: '1',
      primary: 'Create your first book.',
      secondary: '2021/03/01',
      href: '/#/sheet/1'
    }
  ]);

  const handleRemove = id => setItems(items.filter(item => item.id !== id));

  const addItem = name => {
    const id = nanoid();
    setItems([
      ...items,
      {
        id,
        primary: name,
        secondary: formatDate(new Date()),
        href: `/#/sheet/${id}`
      }
    ]);
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header classes={classes}></Header>
      <Home classes={classes} items={items} onRemove={handleRemove} />
      <FloatingButton classes={classes} onClickOpen={handleClickOpen} />
      <AddForm open={open} handleClose={handleClose} handleSubmit={addItem} />
    </ThemeProvider>
  );
}

export default App;
