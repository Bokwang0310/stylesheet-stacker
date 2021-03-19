import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from 'styles';
import { updateSheet } from 'store/modules/sheetList';

function Subheader({ id }) {
  const classes = useStyles();
  const [modifyMode, setModifyMode] = useState(false);
  const dispatch = useDispatch();
  const title = useSelector(
    state => state.sheetList.filter(sheet => sheet.id === id)[0].name
  );

  return (
    <ListSubheader className={classes.subheader} compoenent="div">
      <Grid container direction="row" alignItems="center">
        <Grid item>
          {modifyMode ? (
            <TextField
              type="text"
              autoFocus
              value={title}
              onChange={e => dispatch(updateSheet(id, e.target.value))}
              onBlur={() => setModifyMode(false)}
              margin="dense"
            />
          ) : (
            <Typography variant="h6">{title}</Typography>
          )}
        </Grid>
        <Grid item>
          <IconButton
            aria-label="modify"
            color="default"
            className={classes.modifyIcon}
            onClick={() => setModifyMode(true)}
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
