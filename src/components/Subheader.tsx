import { useState } from 'react';
import { useRecoilState } from 'recoil';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from 'styles';
import { sheetListState } from 'state/sheets';
import { isEmptyString } from 'utils';

type Props = { id: string };

function Subheader({ id }: Props) {
  const classes = useStyles();
  const [modifyMode, setModifyMode] = useState(false);

  const [sheetList, setSheetList] = useRecoilState(sheetListState);
  const title = sheetList.filter(sheet => sheet.id === id)[0].name;

  const [tempTitle, setTempTitle] = useState(title);

  const updateSheet = (id: string, name: string) => {
    if (isEmptyString(name)) return;

    const newSheetList = sheetList.map(sheet =>
      sheet.id !== id ? sheet : { ...sheet, name }
    );

    setSheetList(newSheetList);
  };

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
                setModifyMode(false);
                updateSheet(id, e.target.value);
              }}
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
