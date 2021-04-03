import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { RootState } from 'store/modules';
import { setClose } from 'store/modules/mainAddform';

function MainAddform({
  handleSubmit,
  title,
  children,
}: {
  handleSubmit: (value: string) => void;
  title: string;
  children: string;
}) {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.mainAddform.open);

  return (
    <Dialog
      open={open}
      onClose={() => {
        dispatch(setClose());
        setValue('');
      }}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{children}</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            dispatch(setClose());
            setValue('');
          }}
          color="primary"
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            dispatch(setClose());
            handleSubmit(value);
            setValue('');
          }}
          color="primary"
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default MainAddform;
