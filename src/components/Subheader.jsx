import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  subheader: {
    fontSize: '18px',
    backgroundColor: theme.palette.background.default,
  },
  modifyIcon: {
    padding: '0px',
    marginLeft: theme.spacing(1),
    marginRight: '2px',
    marginTop: '0px',
    marginBottom: '3px',
  },
  deleteIcon: {
    padding: '0px',
    marginLeft: '2px',
    marginRight: theme.spacing(1),
    marginTop: '0px',
    marginBottom: '3px',
  },
}));

function Subheader({ title, id, sectionList, setSectionList }) {
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
            onClick={() => console.log(`Change ${id} this section!`)}
          >
            <CreateIcon fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="modify"
            color="default"
            className={classes.deleteIcon}
            onClick={() =>
              setSectionList(sectionList.filter(section => section.id !== id))
            }
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
    </ListSubheader>
  );
}

export default Subheader;
