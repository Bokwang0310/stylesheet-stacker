import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';

import AlertDialog from 'components/AlertDialog';
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

  const [isOpenConfirm, setOpenConfirm] = useState(false);

  return (
    <>
      {modifyMode ? (
        <IconButton
          onClick={() => {
            setOpenConfirm(true);
          }}
          size="small"
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      ) : null}
      <AlertDialog
        isOpen={isOpenConfirm}
        onClose={() => setOpenConfirm(false)}
        onConfirm={() => deleteSection(SheetId, SectionId)}
        title="Delete Alert"
        content="Are you sure you want to delete this section?"
        confirmBtn="Delete"
        cancelBtn="Cancel"
      />
    </>
  );
}

export default DeleteButton;
