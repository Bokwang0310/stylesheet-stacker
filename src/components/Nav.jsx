import { useState } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Link from '@material-ui/core/Link';

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
      {/* to property */}
      <Tab label="Pinned" />
      <Tab label="Sheets" />
      <Tab label="Setting" />
    </Tabs>
  );
}

export default Nav;
