import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';

import Nav from './Nav.jsx';

function TopBar({ classes }) {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="default"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Views
        </Typography>
        <IconButton
          edge="end"
          className={classes.moreButton}
          aria-label="more"
          color="default"
        >
          <MoreIcon />
        </IconButton>
      </Toolbar>
      <Nav />
    </AppBar>
  );
}

export default TopBar;
