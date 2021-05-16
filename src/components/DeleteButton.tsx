import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';

import { modifyModeState } from 'state/modifyMode';
import { useDispatchSection } from 'hooks/useDispatchSection';

// URL 파라미터를 받아오는 리액트 라우터 훅에 쓰임
type Param = {
  id: string;
};

type Props = {
  id: string;
};

function DeleteButton({ id: SectionId }: Props) {
  const modifyMode = useRecoilValue(modifyModeState);
  const { deleteSection } = useDispatchSection();

  const { id: SheetId } = useParams<Param>();

  return modifyMode ? (
    <IconButton
      onClick={() => {
        deleteSection(SheetId, SectionId);
      }}
      size="small"
    >
      <DeleteIcon fontSize="small" />
    </IconButton>
  ) : null;
}

export default DeleteButton;
