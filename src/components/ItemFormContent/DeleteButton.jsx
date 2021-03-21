import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';

function DeleteButton({ onClick }) {
  return (
    <IconButton onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  );
}

export default DeleteButton;
