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

                if (!isEmptyString(newTitle)) {
                  updateSheet(id, { name: newTitle });
                }
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
            onClick={() => {
              // Sheet의 이름을 다 지워버렸을 경우 (공백만 입력했을 경우)
              // 텍스트필드 상태를 빈문자열로 두는 게 아닌 현재 Sheet의 이름으로 초기화
              if (isEmptyString(tempTitle)) setTempTitle(currentTitle);
              setModifyMode(true);
            }}
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
