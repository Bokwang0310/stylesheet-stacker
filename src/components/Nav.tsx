import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function Nav() {
  const history = useHistory();
  const tabs = ['/', '/setting'];

  const [pathName, setPath] = useState(history.location.pathname);

  // 탭 상태를 전역으로 관리하기 전 임시방편
  if (pathName === '/setting/') setPath('/setting');

  useEffect(() => {
    const unlisten = history.listen((location, _) => {
      setPath(location.pathname);
    });

    return () => {
      unlisten();
    };
  });

  const currentPathIndex = tabs.findIndex(tabPath => pathName === tabPath);

  return (
    <Tabs
      value={currentPathIndex}
      onChange={(_, newValue) => {
        history.push(newValue);
      }}
      centered
      indicatorColor="primary"
      textColor="primary"
    >
      <Tab label="Sheets" component={Link} to={tabs[0]} />
      <Tab label="Setting" component={Link} to={tabs[1]} />
    </Tabs>
  );
}

export default Nav;
