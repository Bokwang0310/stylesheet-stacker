import { nanoid } from 'nanoid';

import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import DeleteButton from 'components/ItemFormContent/DeleteButton';

import useStyles from 'styles';
import { useDispatchItem } from 'hooks/useDispatchItem';
import { TypographyItem, isVariant } from 'state/types';

type Props = {
  sectionID: string;
  item: TypographyItem;
  sheetID: string;
};

function Typography({ sectionID, item, sheetID }: Props) {
  const classes = useStyles();
  const { updateItem, deleteItem } = useDispatchItem();

  return (
    <div key={item.id} className={classes.itemFormListItemContainer}>
      <ListItem>
        <FormControl
          className={`${classes.formControl} ${classes.variantInput}`}
        >
          <Select
            value={item.variant}
            onChange={e => {
              const { value: input } = e.target;
              if (typeof input !== 'string') return;
              if (!isVariant(input)) return;
              updateItem(sheetID, sectionID, item.id, {
                ...item,
                variant: input,
              });
            }}
          >
            {[1, 2, 3, 4, 5, 6].map(variantNumber => (
              <MenuItem
                value={`h${variantNumber}`}
                key={nanoid()}
              >{`h${variantNumber}`}</MenuItem>
            ))}
          </Select>
        </FormControl>
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

export default Typography;
