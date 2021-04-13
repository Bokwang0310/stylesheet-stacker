import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';

import DeleteButton from 'components/ItemFormContent/DeleteButton';

import useStyles from 'styles';
import { useDispatchItem } from 'hooks/useDispatchItem';
import { CustomElementItem } from 'state/types';

type Props = {
  sectionID: string;
  item: CustomElementItem;
  sheetID: string;
};

function CustomElement({ sectionID, item, sheetID }: Props) {
  const classes = useStyles();
  const { updateItem, deleteItem } = useDispatchItem();

  return (
    <div className={classes.itemFormListItemContainer} key={item.id}>
      <ListItem>
        <TextField
          className={classes.typeInput}
          multiline
          value={item.elementType}
          onChange={e =>
            updateItem(sheetID, sectionID, item.id, {
              ...item,
              elementType: e.target.value,
            })
          }
        />
        <DeleteButton onClick={() => deleteItem(sheetID, sectionID, item.id)} />
      </ListItem>
      <ListItem>
        <TextField
          className={classes.cssInput}
          multiline
          value={item.css}
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
export default CustomElement;
