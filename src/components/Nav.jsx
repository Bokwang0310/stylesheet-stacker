import { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { findIndexOfItem } from 'utils';

function Nav({ history }) {
  const tabs = ['/pinned', '/sheets', '/setting'];

  const [value, setValue] = useState(1);

  // const unlisten = history.listen(item => {
  //   const index = routeIndex(findIndexOfItem(item.pathname, tabs));
  //   setValue(index);
  // });

  // useEffect(() => () => unlisten());

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

const routeIndex = index => {
  if (index === -1) return 1;
  return index;
};

export default withRouter(Nav);
