import { useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';

import DeleteButton from 'components/ItemFormContent/DeleteButton';

import { ItemType } from 'store/modules/sheet';
import useStyles from 'styles';
import { updateItem, deleteItem } from 'store/modules/sheet';
import { ButtonItem } from 'state/sheets';

type Props = {
  sectionID: string;
  item: ButtonItem & { id: string };
  sheetID: string;
};

function Button({ sectionID, item, sheetID }: Props) {
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
              updateItem(sheetID, sectionID, item.id, {
                text: e.target.value,
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
          multiline
          value={item.css}
          className={classes.cssInput}
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
export default Button;
