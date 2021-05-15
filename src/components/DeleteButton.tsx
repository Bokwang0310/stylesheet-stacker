import { useSetRecoilState, useRecoilValue } from 'recoil';

import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';

import { modifyModeState, modifyTargetState } from 'state/modifyMode';
import { useDispatchSection } from 'hooks/useDispatchSection';
import useStyles from 'styles';

type Props = {
  id: string;
};

function DeleteButton({ id }: Props) {
  const classes = useStyles();
  const modifyMode = useRecoilValue(modifyModeState);

  return modifyMode ? (
    <IconButton
      onClick={() => {
        console.log(`Delete ${id} section.`);
      }}
      size="small"
      className={classes.modifySectionButton}
    >
      <DeleteIcon fontSize="small" />
    </IconButton>
  ) : null;
}

export default DeleteButton;
