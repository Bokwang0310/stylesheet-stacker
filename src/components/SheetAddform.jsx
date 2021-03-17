import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { setClose } from 'store/modules/sheetAddform';
import useStyles from 'styles';

const types = {
  colorScheme: 'colorScheme',
  typography: 'typography',
  button: 'button',
  customElement: 'customElement',
};

function SheetAddform({ handleSubmit, title, children }) {
  const dispatch = useDispatch();
  const open = useSelector(state => state.sheetAddform.open, []);
  const classes = useStyles();

  const [type, setType] = useState(types.colorScheme);

  return (
    <Dialog
      open={open}
      onClose={() => dispatch(setClose())}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{children}</DialogContentText>
        <FormControl className={classes.formControl}>
          <Select
            id="section-type-select"
            value={type}
            onChange={e => setType(e.target.value)}
          >
            <MenuItem value={types.colorScheme}>Color Scheme</MenuItem>
            <MenuItem value={types.typography}>Typography</MenuItem>
            <MenuItem value={types.button}>Button</MenuItem>
            <MenuItem value={types.customElement}>Custom Element</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(setClose())} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            dispatch(setClose());
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
