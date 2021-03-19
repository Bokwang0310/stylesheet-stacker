import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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
            <Fragment key={item.id}>
              <TextField
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
            </Fragment>
          ))}
          <IconButton
            onClick={() =>
              dispatch(createItem(section.id, { color: '#ffffff' }))
            }
          >
            <AddIcon />
          </IconButton>
        </>
      );
    case 'typography':
      return (
        <>
          <DialogContentText>Change Typograpyh</DialogContentText>
          {section.itemList.map(item => (
            <Fragment key={item.id}>
              <FormControl className={classes.formControl}>
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
                value={item.text}
                onChange={e =>
                  dispatch(
                    updateItem(section.id, item.id, {
                      text: e.target.value,
                    })
                  )
                }
              />
              <TextField
                value={item.css}
                onChange={e =>
                  dispatch(
                    updateItem(section.id, item.id, {
                      css: e.target.value,
                    })
                  )
                }
              />
              <IconButton
                onClick={() => dispatch(deleteItem(section.id, item.id))}
              >
                <DeleteIcon />
              </IconButton>
            </Fragment>
          ))}
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
        </>
      );
    case 'button':
      return (
        <>
          <DialogContentText>Change Button</DialogContentText>
          {section.itemList.map(item => (
            <Fragment key={item.id}>
              <TextField
                value={item.text}
                onChange={e =>
                  dispatch(
                    updateItem(section.id, item.id, {
                      text: e.target.value,
                    })
                  )
                }
              />
              <TextField
                value={item.css}
                onChange={e =>
                  dispatch(
                    updateItem(section.id, item.id, {
                      css: e.target.value,
                    })
                  )
                }
              />
              <IconButton
                onClick={() => dispatch(deleteItem(section.id, item.id))}
              >
                <DeleteIcon />
              </IconButton>
            </Fragment>
          ))}
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
        </>
      );
    case 'customElement':
      return (
        <>
          <DialogContentText>Change your custom element</DialogContentText>
          {section.itemList.map(item => (
            <Fragment key={item.id}>
              <TextField
                value={item.type}
                onChange={e =>
                  dispatch(
                    updateItem(section.id, item.id, {
                      type: e.target.value,
                    })
                  )
                }
              />
              <TextField
                value={item.css}
                onChange={e =>
                  dispatch(
                    updateItem(section.id, item.id, {
                      css: e.target.value,
                    })
                  )
                }
              />
              <IconButton
                onClick={() => dispatch(deleteItem(section.id, item.id))}
              >
                <DeleteIcon />
              </IconButton>
            </Fragment>
          ))}
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
        </>
      );

    default:
      throw new Error();
  }
}

export default ItemFormContent;
