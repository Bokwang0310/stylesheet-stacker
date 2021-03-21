import { useDispatch } from 'react-redux';

import DialogContentText from '@material-ui/core/DialogContentText';

import { createItem } from 'store/modules/sheet';

import AddButton from 'components/ItemFormContent/AddButton';
import ColorScheme from 'components/ItemFormContent/ColorScheme';
import Typography from 'components/ItemFormContent/Typography';
import Button from 'components/ItemFormContent/Button';
import CustomElement from 'components/ItemFormContent/CustomElement';

function ItemFormContent({ section }) {
  const dispatch = useDispatch();

  switch (section.type) {
    case 'colorScheme':
      return (
        <>
          <DialogContentText>Change Color scheme</DialogContentText>
          {section.itemList.map(item => (
            <ColorScheme key={item.id} sectionID={section.id} item={item} />
          ))}
          <AddButton
            onClick={() =>
              dispatch(createItem(section.id, { color: '#ffffff' }))
            }
          />
        </>
      );

    case 'typography':
      return (
        <>
          <DialogContentText>Change Typograpyh</DialogContentText>
          {section.itemList.map(item => (
            <Typography key={item.id} sectionID={section.id} item={item} />
          ))}
          <AddButton
            onClick={() =>
              dispatch(
                createItem(section.id, {
                  variant: 'h4',
                  text: 'Exmaple Typography',
                  css: '{ background-color: red; }',
                })
              )
            }
          />
        </>
      );

    case 'button':
      return (
        <>
          <DialogContentText>Change Button</DialogContentText>
          {section.itemList.map(item => (
            <Button key={item.id} sectionID={section.id} item={item} />
          ))}
          <AddButton
            onClick={() =>
              dispatch(
                createItem(section.id, {
                  text: 'Ex Btn',
                  css: '{ color: red; }',
                })
              )
            }
          />
        </>
      );

    case 'customElement':
      return (
        <>
          <DialogContentText>Change your custom element</DialogContentText>
          {section.itemList.map(item => (
            <CustomElement key={item.id} sectionID={section.id} item={item} />
          ))}
          <AddButton
            onClick={() =>
              dispatch(
                createItem(section.id, {
                  type: 'input',
                  css: '{ color: red; }',
                })
              )
            }
          />
        </>
      );

    default:
      throw new Error();
  }
}

export default ItemFormContent;
