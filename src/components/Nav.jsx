import { Link, useHistory } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function Nav() {
  const history = useHistory();
  const tabs = ['/sheets', '/setting', '/sheets/', '/setting/'];
  const currentPathIndex = tabs.findIndex(
    tabPath => history.location.pathname === tabPath
  );
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
