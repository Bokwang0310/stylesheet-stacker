import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function Nav() {
  const history = useHistory();
  const tabs = ['/sheets', '/setting', '/sheets/', '/setting/'];

  const [pathName, setPath] = useState(history.location.pathname);

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
      value={currentPathIndex === 0 || currentPathIndex === 2 ? 0 : 1}
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
