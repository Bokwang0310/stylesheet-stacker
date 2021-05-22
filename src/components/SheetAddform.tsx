import { useState } from 'react';
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
import { SectionType, isSectionType } from 'state/types';

type Props = {
  handleSubmit: (sectionType: SectionType) => void;
  title: string;
  children: string;
};

function SheetAddform({ handleSubmit, title, children }: Props) {
  const classes = useStyles();
  const [addformState, setAddformState] = useRecoilState(sheetAddformState);
  const [type, setType] = useState(SectionType.color);

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
              const { value } = e.target;
              if (typeof value !== 'string') return;
              if (!isSectionType(value)) return;
              setType(value);
            }}
          >
            <MenuItem value={SectionType.color}>Color Scheme</MenuItem>
            <MenuItem value={SectionType.typography}>Typography</MenuItem>
            <MenuItem value={SectionType.button}>Button</MenuItem>
            <MenuItem value={SectionType.customElement}>
              Custom Element
            </MenuItem>
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
