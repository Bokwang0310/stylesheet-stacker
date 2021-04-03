import { useSelector, useDispatch } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { RootState } from 'store/modules';
import ItemFormContent from 'components/ItemFormContent';
import { closeItemForm } from 'store/modules/mode';

function ItemForm({ id }: { id: string }) {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.mode.openItemForm);
  const sheetList = useSelector((state: RootState) => state.sheet);
  const targetSheet = sheetList.filter(sheet => sheet.id === id)[0];
  const targetSectionID = useSelector(
    (state: RootState) => state.mode.modifyTarget
  );

  return (
    <Dialog
      open={open}
      onClose={() => dispatch(closeItemForm())}
      aria-labelledby="form-dialog-title"
      fullScreen
      maxWidth="xl"
    >
      <DialogTitle id="item-form-dialog-title">Modify</DialogTitle>
      <DialogContent>
        <ItemFormContent
          section={
            targetSheet.sectionList.filter(
              section => section.id === targetSectionID
            )[0]
          }
          id={id}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(closeItemForm())} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ItemForm;
