import { useState } from 'react';

import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from 'styles';
import { isEmptyString } from 'utils';
import { useDispatchSheet } from 'hooks/useDispatchSheet';

type Props = {
  id: string;
};

function Subheader({ id }: Props) {
  const classes = useStyles();
  const [modifyMode, setModifyMode] = useState(false);
  const { getSheetByID, updateSheet } = useDispatchSheet();

  const currentTitle = getSheetByID(id).name;
  const [tempTitle, setTempTitle] = useState(currentTitle);

  return (
    <ListSubheader className={classes.subheader} component="div">
      <Grid container direction="row" alignItems="center">
        <Grid item>
          {modifyMode ? (
            <TextField
              type="text"
              autoFocus
              value={tempTitle}
              onChange={e => setTempTitle(e.target.value)}
              onBlur={e => {
                const newTitle = e.target.value;
                setModifyMode(false);

                if (isEmptyString(newTitle)) return;
                updateSheet(id, { name: newTitle });
              }}
              margin="dense"
            />
          ) : (
            <Typography variant="h6">{currentTitle}</Typography>
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
