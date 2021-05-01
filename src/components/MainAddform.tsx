import { useState } from 'react';
import { useRecoilState } from 'recoil';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { mainAddformState } from 'state/form';

type Props = {
  handleSubmit: (sheetName: string) => void;
  title: string;
  children: string;
};

function MainAddform({ handleSubmit, title, children }: Props) {
  const [sheetName, setSheetName] = useState('');
  const [addformState, setAddformState] = useRecoilState(mainAddformState);

  const closeAddform = () => {
    setAddformState(false);
    setSheetName('');
  };

  return (
    <Dialog
      open={addformState}
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
          value={sheetName}
          onChange={e => setSheetName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeAddform} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            closeAddform();
            handleSubmit(sheetName);
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
