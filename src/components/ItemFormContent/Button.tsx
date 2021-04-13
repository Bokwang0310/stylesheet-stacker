import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';

import DeleteButton from 'components/ItemFormContent/DeleteButton';

import useStyles from 'styles';
import { useDispatchItem } from 'hooks/useDispatchItem';
import { ButtonItem } from 'state/types';

type Props = {
  sectionID: string;
  item: ButtonItem;
  sheetID: string;
};

function Button({ sectionID, item, sheetID }: Props) {
  const classes = useStyles();
  const { updateItem, deleteItem } = useDispatchItem();

  return (
    <div className={classes.itemFormListItemContainer} key={item.id}>
      <ListItem>
        <TextField
          multiline
          value={item.text}
          onChange={e =>
            updateItem(sheetID, sectionID, item.id, {
              ...item,
              text: e.target.value,
            })
          }
        />
        <DeleteButton onClick={() => deleteItem(sheetID, sectionID, item.id)} />
      </ListItem>
      <ListItem>
        <TextField
          multiline
          value={item.css}
          className={classes.cssInput}
          onChange={e =>
            updateItem(sheetID, sectionID, item.id, {
              ...item,
              css: e.target.value,
            })
          }
        />
      </ListItem>
    </div>
  );
}
export default Button;
