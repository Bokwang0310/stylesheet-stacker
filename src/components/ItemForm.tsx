import { useRecoilState, useRecoilValue } from 'recoil';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import ItemFormContent from 'components/ItemFormContent';
import { itemFormState } from 'state/form';
import { modifyTargetState } from 'state/modifyMode';
import { useDispatchSection } from 'hooks/useDispatchSection';

type Props = {
  id: string;
};

function ItemForm({ id }: Props) {
  const { getSectionByID } = useDispatchSection();
  const [formState, setFormState] = useRecoilState(itemFormState);
  const targetSectionID = useRecoilValue(modifyTargetState);

  const targetSection = getSectionByID(id, targetSectionID);

  if (typeof targetSection === 'undefined')
    throw new Error(
      `Sheet Id: ${id}, Section Id: ${targetSectionID}에 해당하는 section을 찾을 수 없습니다.`
    );

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
