import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useState } from 'react';

function AddForm({ open, closeAddForm, addSheet }) {
  const [value, setValue] = useState('');

  return (
    <Dialog
      open={open}
      onClose={closeAddForm}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add Style</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Plese enter the name of your style.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeAddForm} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            closeAddForm();
            addSheet(value);
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

export default AddForm;
