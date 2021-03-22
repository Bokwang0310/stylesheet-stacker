import { useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import SheetListPage from 'pages/SheetListPage';
import SettingPage from 'pages/SettingPage';
import SheetPage from 'pages/SheetPage';
import NotFoundPage from 'pages/NotFoundPage';

import Header from 'components/Header';

function App() {
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
              <SheetListPage />
            </Route>

            <Route path="/setting" exact>
              <SettingPage
                colors={colors}
                changeColor={setColors}
                changeMode={setMode}
                mode={mode}
              />
            </Route>

            <Route path="/sheet/:id" component={SheetPage} />

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
