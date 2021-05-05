import { useRecoilValue } from 'recoil';
import { Route, Switch } from 'react-router-dom';

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
          {/* Header 컴포넌트를 나누면 상태도 나눠져서 탭 이동할 때 애니메이션이 일어나지 않음 */}
          {/* 탭 상태를 전역으로 관리하면 되지 않을까.. */}
          <Route path={['/', '/setting']} exact>
            <Header />
          </Route>

          <Switch>
            <Route path="/setting">
              <SettingPage />
            </Route>

            <Route path="/sheet/:id">
              <SheetPage />
            </Route>

            <Route path="/" exact>
              <SheetListPage />
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
