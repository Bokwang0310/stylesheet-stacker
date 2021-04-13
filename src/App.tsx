import { useRecoilValue } from 'recoil';
import { Route, Redirect, Switch } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import SheetListPage from './pages/SheetListPage';
import SettingPage from './pages/SettingPage';
import SheetPage from './pages/SheetPage';
import NotFoundPage from './pages/NotFoundPage';

import Header from './components/Header';
import { colorState, nightModeState } from 'state/setting';

function App() {
  const colorList = useRecoilValue(colorState);
  const nightMode = useRecoilValue(nightModeState);

  const theme = createMuiTheme({
    palette: {
      type: nightMode ? 'dark' : 'light',
      primary: { main: colorList[0] },
      secondary: { main: colorList[1] },
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
