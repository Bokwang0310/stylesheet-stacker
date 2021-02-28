import { useState } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function Nav() {
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
      <Tab label="Pinned" />
      <Tab label="Home" />
      <Tab label="Setting" />
    </Tabs>
  );
}

export default Nav;
