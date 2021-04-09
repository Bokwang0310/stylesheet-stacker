import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import useStyles from 'styles';
import { sheetAddformState } from 'state/form';

const types = {
  colorScheme: 'colorScheme',
  typography: 'typography',
  button: 'button',
  customElement: 'customElement',
};

type Props = {
  handleSubmit: (sectionType: string) => void;
  title: string;
  children: string;
};

function SheetAddform({ handleSubmit, title, children }: Props) {
  const classes = useStyles();
  const [addformState, setAddformState] = useRecoilState(sheetAddformState);
  const [type, setType] = useState(types.colorScheme);

  return (
    <Dialog
      open={addformState}
      onClose={() => setAddformState(false)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{children}</DialogContentText>
        <FormControl className={classes.formControl}>
          <Select
            id="section-type-select"
            value={type}
            onChange={e => {
              if (typeof e.target.value !== 'string') return;
              setType(e.target.value);
            }}
          >
            <MenuItem value={types.colorScheme}>Color Scheme</MenuItem>
            <MenuItem value={types.typography}>Typography</MenuItem>
            <MenuItem value={types.button}>Button</MenuItem>
            <MenuItem value={types.customElement}>Custom Element</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setAddformState(false)} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            setAddformState(false);
            handleSubmit(type);
          }}
          color="primary"
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SheetAddform;
