import { useRecoilState, useRecoilValue } from 'recoil';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import ItemFormContent from 'components/ItemFormContent';
import { itemFormState } from 'state/form';
import { modifyTargetState } from 'state/modifyMode';
import { useDispatchSheet } from 'hooks/useDispatchSheet';

type Props = {
  id: string;
};

function ItemForm({ id }: Props) {
  const { getSheetByID } = useDispatchSheet();
  const [formState, setFormState] = useRecoilState(itemFormState);

  const targetSheet = getSheetByID(id);
  const targetSectionID = useRecoilValue(modifyTargetState);
  const targetSection = targetSheet.sectionList.filter(
    section => section.id === targetSectionID
  )[0];

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
        <ItemFormContent section={targetSection} id={id} />
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
