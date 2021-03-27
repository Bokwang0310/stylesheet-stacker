import { useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';

import DeleteButton from 'components/ItemFormContent/DeleteButton';

import { updateItem, deleteItem } from 'store/modules/sheet';
import useStyles from 'styles';

function CustomElement({ sectionID, item, sheetID }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.itemFormListItemContainer} key={item.id}>
      <ListItem>
        <TextField
          className={classes.typeInput}
          multiline
          value={item.type}
          onChange={e =>
            dispatch(
              updateItem(sheetID, sectionID, item.id, {
                type: e.target.value,
              })
            )
          }
        />
        <DeleteButton
          onClick={() => dispatch(deleteItem(sheetID, sectionID, item.id))}
        />
      </ListItem>
      <ListItem>
        <TextField
          className={classes.cssInput}
          multiline
          value={item.css}
          onChange={e =>
            dispatch(
              updateItem(sheetID, sectionID, item.id, {
                css: e.target.value,
              })
            )
          }
        />
      </ListItem>
    </div>
  );
}
export default CustomElement;
