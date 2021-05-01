import { useRecoilValue } from 'recoil';
import { Route, Redirect, Switch } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

import SheetListPage from './pages/SheetListPage';
import SettingPage from './pages/SettingPage';
import SheetPage from './pages/SheetPage';
import NotFoundPage from './pages/NotFoundPage';

import Header from './components/Header';
import { colorState, nightModeState } from 'state/setting';

function App() {
  const [primaryColor, secondaryColor] = useRecoilValue(colorState);
  const nightMode = useRecoilValue(nightModeState);

  const theme = createMuiTheme({
    palette: {
      type: nightMode ? 'dark' : 'light',
      primary: { main: primaryColor },
      secondary: { main: secondaryColor },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {/* 다크테마가 앱 전체에 안먹혀서 임시 방편으로 박스를 두 개 겹쳐 놓음 */}
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
