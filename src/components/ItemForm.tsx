import { useRecoilState, useRecoilValue } from 'recoil';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import ItemFormContent from 'components/ItemFormContent';
import { itemFormState } from 'state/form';
import { modifyTargetState } from 'state/modifyMode';
import { sheetListState } from 'state/sheets';

type Props = { id: string };

function ItemForm({ id }: Props) {
  const sheetList = useRecoilValue(sheetListState);
  const targetSheet = sheetList.filter(sheet => sheet.id === id)[0];
  const targetSectionID = useRecoilValue(modifyTargetState);
  const [formState, setFormState] = useRecoilState(itemFormState);

  return (
    <Dialog
      open={formState}
      onClose={() => setFormState(false)}
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
        <Button onClick={() => setFormState(false)} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ItemForm;
