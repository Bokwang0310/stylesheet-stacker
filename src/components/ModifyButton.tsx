import { useSetRecoilState, useRecoilValue } from 'recoil';
import IconButton from '@material-ui/core/IconButton';

import ModifyIcon from '@material-ui/icons/Create';

import { itemFormState } from 'state/form';
import { modifyModeState, modifyTargetState } from 'state/modifyMode';
import useStyles from 'styles';

type Props = {
  id: string;
};

function ModifyButton({ id }: Props) {
  const classes = useStyles();

  const modifyMode = useRecoilValue(modifyModeState);
  const setModifyTarget = useSetRecoilState(modifyTargetState);

  const setFormState = useSetRecoilState(itemFormState);

  return modifyMode ? (
    <IconButton
      onClick={() => {
        setModifyTarget(id);
        setFormState(true);
      }}
      size="small"
      className={classes.modifySectionButton}
    >
      <ModifyIcon fontSize="small" />
    </IconButton>
  ) : null;
}

export default ModifyButton;
