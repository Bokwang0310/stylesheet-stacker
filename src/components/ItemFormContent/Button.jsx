import { useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';

import DeleteButton from 'components/ItemFormContent/DeleteButton';

import useStyles from 'styles';
import { updateItem, deleteItem } from 'store/modules/sheet';

function Button({ sectionID, item, sheetID }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.itemFormListItemContainer} key={item.id}>
      <ListItem>
        <TextField
          multiline
          value={item.text}
          onChange={e =>
            dispatch(
              updateItem(
                sectionID,
                item.id,
                {
                  text: e.target.value,
                },
                sheetID
              )
            )
          }
        />
        <DeleteButton
          onClick={() => dispatch(deleteItem(sectionID, item.id, sheetID))}
        />
      </ListItem>
      <ListItem>
        <TextField
          multiline
          value={item.css}
          className={classes.cssInput}
          onChange={e =>
            dispatch(
              updateItem(
                sectionID,
                item.id,
                {
                  css: e.target.value,
                },
                sheetID
              )
            )
          }
        />
      </ListItem>
    </div>
  );
}
export default Button;
