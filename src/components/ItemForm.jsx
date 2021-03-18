import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ItemFormContent from 'components/ItemFormContent';
import { closeItemForm } from 'store/modules/mode';

function ItemForm() {
  const [value, setValue] = useState('Hello');
  const open = useSelector(state => state.mode.openItemForm);
  const dispatch = useDispatch();
  const sectionList = useSelector(state => state.sheet.sectionList);
  const targetSectionID = useSelector(state => state.mode.modifyTarget);

  return (
    <Dialog
      open={open}
      onClose={() => dispatch(closeItemForm())}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="item-form-dialog-title">Modify</DialogTitle>
      <DialogContent>
        <ItemFormContent
          section={
            sectionList.filter(section => section.id === targetSectionID)[0]
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(closeItemForm())} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            if (value === '') return;
            dispatch(closeItemForm());
            console.log(value);
            setValue('');
          }}
          color="primary"
        >
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ItemForm;
