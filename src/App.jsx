import { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Header from 'components/Header';
import Setting from 'components/Setting';
import Sheet from 'components/Sheet';
import SheetList from 'components/SheetList';
import MainFab from 'components/MainFab';
import MainAddform from 'components/MainAddform';

import { addSheet } from 'store/modules/sheetList';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  moreButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [colors, setColors] = useState({
    primary: '#7e57c2',
    secondary: '#7986cb',
  });

  const [mode, setMode] = useState('light');

  return (
    <MuiThemeProvider
      theme={createMuiTheme({
        palette: {
          type: mode,
          primary: { main: colors.primary },
          secondary: { main: colors.secondary },
        },
      })}
    >
      <Box height="100vh" bgcolor="background.default">
        <Box bgcolor="background.default">
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
            <Setting
              colors={colors}
              changeColor={setColors}
              changeMode={setMode}
              mode={mode}
            />
          </Route>
          <Route path="/sheet/:id" component={Sheet} />

          <Route path={['/sheets', '/pinned']}>
            <MainFab classes={classes} />
            <MainAddform
              title="Add Sheet"
              handleSubmit={value => dispatch(addSheet(value))}
            >
              Plese enter the name of your style sheet.
            </MainAddform>
          </Route>
        </Box>
      </Box>
    </MuiThemeProvider>
  );
}

export default App;
