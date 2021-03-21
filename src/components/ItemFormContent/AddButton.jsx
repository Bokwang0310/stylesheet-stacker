import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';

import AddIcon from '@material-ui/icons/Add';

function AddButton({ onClick }) {
  return (
    <ListItem style={{ paddingLeft: 0 }}>
      <IconButton onClick={onClick}>
        <AddIcon />
      </IconButton>
    </ListItem>
  );
}

export default AddButton;
