import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';

import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from 'styles';
import { updateItem, createItem, deleteItem } from 'store/modules/sheet';

function ItemFormContent({ section }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  switch (section.type) {
    case 'colorScheme':
      return (
        <>
          <DialogContentText>Change Color scheme</DialogContentText>
          {section.itemList.map(item => (
            <div className={classes.itemFormListItemContainer} key={item.id}>
              <ListItem>
                <TextField
                  multiline
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
              </ListItem>
            </div>
          ))}
          <ListItem style={{ paddingLeft: 0 }}>
            <IconButton
              onClick={() =>
                dispatch(createItem(section.id, { color: '#ffffff' }))
              }
            >
              <AddIcon />
            </IconButton>
          </ListItem>
        </>
      );
    case 'typography':
      return (
        <>
          <DialogContentText>Change Typograpyh</DialogContentText>
          {section.itemList.map(item => (
            <div key={item.id}>
              <ListItem>
                <FormControl
                  className={`${classes.formControl} ${classes.variantInput}`}
                >
                  <Select
                    value={item.variant}
                    onChange={e =>
                      dispatch(
                        updateItem(section.id, item.id, {
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
                      updateItem(section.id, item.id, {
                        text: e.target.value,
                      })
                    )
                  }
                />
                <IconButton
                  onClick={() => dispatch(deleteItem(section.id, item.id))}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <ListItem>
                <TextField
                  multiline
                  value={item.css}
                  className={classes.cssInput}
                  onChange={e =>
                    dispatch(
                      updateItem(section.id, item.id, {
                        css: e.target.value,
                      })
                    )
                  }
                />
              </ListItem>
            </div>
          ))}
          <ListItem style={{ paddingLeft: 0 }}>
            <IconButton
              onClick={() =>
                dispatch(
                  createItem(section.id, {
                    variant: 'h4',
                    text: 'Exmaple Typography',
                    css: '{ background-color: red; }',
                  })
                )
              }
            >
              <AddIcon />
            </IconButton>
          </ListItem>
        </>
      );
    case 'button':
      return (
        <>
          <DialogContentText>Change Button</DialogContentText>
          {section.itemList.map(item => (
            <div className={classes.itemFormListItemContainer} key={item.id}>
              <ListItem>
                <TextField
                  multiline
                  value={item.text}
                  onChange={e =>
                    dispatch(
                      updateItem(section.id, item.id, {
                        text: e.target.value,
                      })
                    )
                  }
                />
                <IconButton
                  onClick={() => dispatch(deleteItem(section.id, item.id))}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <ListItem>
                <TextField
                  multiline
                  className={classes.cssInput}
                  value={item.css}
                  onChange={e =>
                    dispatch(
                      updateItem(section.id, item.id, {
                        css: e.target.value,
                      })
                    )
                  }
                />
              </ListItem>
            </div>
          ))}
          <ListItem style={{ paddingLeft: 0 }}>
            <IconButton
              onClick={() =>
                dispatch(
                  createItem(section.id, {
                    text: 'Ex Btn',
                    css: '{ color: red; }',
                  })
                )
              }
            >
              <AddIcon />
            </IconButton>
          </ListItem>
        </>
      );
    case 'customElement':
      return (
        <>
          <DialogContentText>Change your custom element</DialogContentText>
          {section.itemList.map(item => (
            <div className={classes.itemFormListItemContainer} key={item.id}>
              <ListItem>
                <TextField
                  className={classes.typeInput}
                  multiline
                  value={item.type}
                  onChange={e =>
                    dispatch(
                      updateItem(section.id, item.id, {
                        type: e.target.value,
                      })
                    )
                  }
                />
                <IconButton
                  onClick={() => dispatch(deleteItem(section.id, item.id))}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <ListItem>
                <TextField
                  className={classes.cssInput}
                  multiline
                  value={item.css}
                  onChange={e =>
                    dispatch(
                      updateItem(section.id, item.id, {
                        css: e.target.value,
                      })
                    )
                  }
                />
              </ListItem>
            </div>
          ))}
          <ListItem style={{ paddingLeft: 0 }}>
            <IconButton
              onClick={() =>
                dispatch(
                  createItem(section.id, {
                    type: 'input',
                    css: '{ color: red; }',
                  })
                )
              }
            >
              <AddIcon />
            </IconButton>
          </ListItem>
        </>
      );

    default:
      throw new Error();
  }
}

export default ItemFormContent;
