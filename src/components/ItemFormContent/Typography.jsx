import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';

import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import DeleteButton from 'components/ItemFormContent/DeleteButton';

import useStyles from 'styles';
import { updateItem, deleteItem } from 'store/modules/sheet';

function Typography({ sectionID, item }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div key={item.id} className={classes.itemFormListItemContainer}>
      <ListItem>
        <FormControl
          className={`${classes.formControl} ${classes.variantInput}`}
        >
          <Select
            value={item.variant}
            onChange={e =>
              dispatch(
                updateItem(sectionID, item.id, {
                  variant: e.target.value,
                })
              )
            }
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
            dispatch(
              updateItem(sectionID, item.id, {
                text: e.target.value,
              })
            )
          }
        />
        <DeleteButton
          onClick={() => dispatch(deleteItem(sectionID, item.id))}
        />
      </ListItem>
      <ListItem>
        <TextField
          multiline
          value={item.css}
          className={classes.cssInput}
          onChange={e =>
            dispatch(
              updateItem(sectionID, item.id, {
                css: e.target.value,
              })
            )
          }
        />
      </ListItem>
    </div>
  );
}

export default Typography;
