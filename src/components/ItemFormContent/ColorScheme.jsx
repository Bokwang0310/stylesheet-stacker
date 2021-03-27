import { useDispatch } from 'react-redux';

import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';

import DeleteButton from 'components/ItemFormContent/DeleteButton';

import { updateItem, deleteItem } from 'store/modules/sheet';
import useStyles from 'styles';

function ColorScheme({ sectionID, item, sheetID }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.itemFormListItemContainer}>
      <ListItem>
        <TextField
          multiline
          key={item.id}
          value={item.color}
          onChange={e => {
            dispatch(
              updateItem(sheetID, sectionID, item.id, { color: e.target.value })
            );
          }}
        />
        <DeleteButton
          onClick={() => dispatch(deleteItem(sheetID, sectionID, item.id))}
        />
      </ListItem>
    </div>
  );
}

export default ColorScheme;
