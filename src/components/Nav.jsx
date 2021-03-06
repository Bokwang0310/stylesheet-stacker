import { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function Nav() {
  const tabs = ['/pinned', '/sheets', '/setting'];

  const [value, setValue] = useState(1);

  return (
    <Tabs
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
      }}
      centered
      indicatorColor="primary"
      textColor="primary"
    >
      <Tab label="Pinned" component={Link} to={tabs[0]} />
      <Tab label="Sheets" component={Link} to={tabs[1]} />
      <Tab label="Setting" component={Link} to={tabs[2]} />
    </Tabs>
  );
}

export default withRouter(Nav);
