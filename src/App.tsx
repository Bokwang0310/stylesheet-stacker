import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import SheetListPage from './pages/SheetListPage';
import SettingPage from './pages/SettingPage';
import SheetPage from './pages/SheetPage';
import NotFoundPage from './pages/NotFoundPage';

import Header from './components/Header';
import { RootState } from './store/modules';

function App() {
  const { primaryColor, secondaryColor, nightMode } = useSelector(
    (state: RootState) => state.setting
  );

  const theme = createMuiTheme({
    palette: {
      type: nightMode ? 'dark' : 'light',
      primary: { main: primaryColor },
      secondary: { main: secondaryColor },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
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
              <SheetListPage />
            </Route>

            <Route path="/setting" exact>
              <SettingPage />
            </Route>

            <Route path="/sheet/:id">
              <SheetPage />
            </Route>
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
