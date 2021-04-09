import { useRecoilState } from 'recoil';
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

import { sheetListState, Sheet } from 'state/sheets';

type Props = {
  sheet: Sheet;
};

function SheetLink({ sheet }: Props) {
  const [sheetList, setSheetList] = useRecoilState(sheetListState);

  const removeSheet = (id: string) => {
    const newSheetLinkList = sheetList.filter(sheetLink => sheetLink.id !== id);
    setSheetList(newSheetLinkList);
  };

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
          onClick={() => removeSheet(sheet.id)}
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
