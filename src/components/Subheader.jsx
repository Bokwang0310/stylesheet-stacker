import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from 'styles';

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
            className={classes.modifyIcon}
            onClick={() => console.log(`Change title!`)}
          >
            <CreateIcon fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="modify"
            color="default"
            className={classes.deleteIcon}
            onClick={() => console.log(`Delete this sheet!`)}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
    </ListSubheader>
  );
}

export default Subheader;
