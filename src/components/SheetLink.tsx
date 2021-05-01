import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

import { Sheet } from 'state/types';
import { useDispatchSheet } from 'hooks/useDispatchSheet';

type Props = {
  sheet: Sheet;
};

function SheetLink({ sheet }: Props) {
  const { deleteSheet } = useDispatchSheet();

  return (
    <ListItem button component={Link} to={`/sheet/${sheet.id}`}>
      <ListItemAvatar>
        <Avatar color="default">
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText secondary={sheet.date}>
        <Box color="text.primary">{sheet.name}</Box>
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton
          onClick={() => deleteSheet(sheet.id)}
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon color="action" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default SheetLink;
