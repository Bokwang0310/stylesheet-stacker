import { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function Addform({ open, closeAddform, handleSubmit, children, title }) {
  const [value, setValue] = useState('');

  return (
    <Dialog
      open={open}
      onClose={closeAddform}
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
        <Button onClick={closeAddform} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            if (value === '') return;
            closeAddform();
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

export default Addform;
