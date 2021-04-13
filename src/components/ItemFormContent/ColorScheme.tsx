import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';

import DeleteButton from 'components/ItemFormContent/DeleteButton';

import useStyles from 'styles';
import { ColorItem } from 'state/sheets';
import { useDispatchItem } from 'hooks/useDispatchItem';

type Props = {
  sectionID: string;
  item: ColorItem;
  sheetID: string;
};

function ColorScheme({ sectionID, item, sheetID }: Props) {
  const classes = useStyles();
  const { updateItem, deleteItem } = useDispatchItem();

  return (
    <div className={classes.itemFormListItemContainer}>
      <ListItem>
        <TextField
          multiline
          key={item.id}
          value={item.color}
          onChange={e => {
            updateItem(sheetID, sectionID, item.id, {
              ...item,
              color: e.target.value,
            });
          }}
        />
        <DeleteButton onClick={() => deleteItem(sheetID, sectionID, item.id)} />
      </ListItem>
    </div>
  );
}

export default ColorScheme;
