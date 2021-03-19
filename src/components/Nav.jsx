import { Link, withRouter } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function Nav({ history }) {
  const tabs = ['/sheets', '/setting'];

  return (
    <Tabs
      value={tabs.findIndex(tabPath => history.location.pathname === tabPath)}
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

export default withRouter(Nav);
