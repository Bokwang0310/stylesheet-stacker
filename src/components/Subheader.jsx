import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles(theme => ({
  subheader: {
    fontSize: '18px',
    backgroundColor: theme.palette.background.default
  },
  subheaderIcon: { marginLeft: theme.spacing(2) }
}));

function Subheader({ title }) {
  const classes = useStyles();
  return (
    <ListSubheader className={classes.subheader} compoenent="div">
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item>
          <IconButton
            aria-label="modify"
            color="default"
            className={classes.subheaderIcon}
          >
            <CreateIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
    </ListSubheader>
  );
}

export default Subheader;
