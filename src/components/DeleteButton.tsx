import { useRecoilValue } from 'recoil';

import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';

import { modifyModeState } from 'state/modifyMode';
import { useDispatchSection } from 'hooks/useDispatchSection';

type Props = {
  id: string;
};

function DeleteButton({ id }: Props) {
  const modifyMode = useRecoilValue(modifyModeState);
  const { deleteSection } = useDispatchSection();

  return modifyMode ? (
    <IconButton
      onClick={() => {
        // deleteSection(id);
      }}
      size="small"
    >
      <DeleteIcon fontSize="small" />
    </IconButton>
  ) : null;
}

export default DeleteButton;
