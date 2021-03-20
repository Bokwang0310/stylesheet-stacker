import { useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Header from 'components/Header';
import Setting from 'components/Setting';
import SheetList from 'components/SheetList';
import Sheet from 'components/Sheet';
import MainFab from 'components/MainFab';
import MainAddform from 'components/MainAddform';
import NotFoundPage from 'components/NotFoundPage';

import { addSheet } from 'store/modules/sheetList';

function App() {
  const dispatch = useDispatch();

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

          <Route path={['/sheets', '/setting']} exact>
            <Header />
          </Route>

          <Switch>
            <Route path="/sheets" exact>
              <SheetList />
              <MainFab />
              <MainAddform
                title="Add Sheet"
                handleSubmit={value => dispatch(addSheet(value))}
              >
                Plese enter the name of your style sheet.
              </MainAddform>
            </Route>

            <Route path="/setting" exact>
              <Setting
                colors={colors}
                changeColor={setColors}
                changeMode={setMode}
                mode={mode}
              />
            </Route>

            <Route path="/sheet/:id" component={Sheet} />

            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Box>
      </Box>
    </MuiThemeProvider>
  );
}

export default App;
