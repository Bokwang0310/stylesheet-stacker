import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

import { updateItem, createItem, deleteItem } from 'store/modules/sheet';

function ItemFormContent({ section }) {
  const dispatch = useDispatch();

  switch (section.type) {
    case 'colorScheme':
      return (
        <>
          <DialogContentText>Change Color scheme</DialogContentText>
          {section.itemList.map(item => (
            <Fragment key={item.id}>
              <TextField
                key={item.id}
                value={item.color}
                onChange={e => {
                  dispatch(
                    updateItem(section.id, item.id, { color: e.target.value })
                  );
                }}
              />
              <IconButton
                onClick={() => dispatch(deleteItem(section.id, item.id))}
              >
                <DeleteIcon />
              </IconButton>
            </Fragment>
          ))}
          <IconButton
            onClick={() =>
              dispatch(createItem(section.id, { color: '#ffffff' }))
            }
          >
            <AddIcon />
          </IconButton>
        </>
      );
    case 'typography':
      return (
        <>
          <DialogContentText></DialogContentText>
          <TextField></TextField>
        </>
      );
    case 'button':
      return (
        <>
          <DialogContentText></DialogContentText>
          <TextField></TextField>
        </>
      );
    case 'customElement':
      return (
        <>
          <DialogContentText></DialogContentText>
          <TextField></TextField>
        </>
      );

    default:
      throw new Error();
  }
}

export default ItemFormContent;
