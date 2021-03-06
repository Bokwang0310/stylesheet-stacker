import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';

import Nav from 'components/Nav';
import useStyles from 'styles';

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color="default">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="default"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.header}>
          Stacker
        </Typography>
        <IconButton
          edge="end"
          className={classes.infoButton}
          aria-label="more"
          color="default"
          href="https://github.com/Bokwang0310/stylesheet-stacker"
        >
          <InfoIcon />
        </IconButton>
      </Toolbar>
      {/* Navigation */}
      <Nav />
    </AppBar>
  );
}

export default Header;
