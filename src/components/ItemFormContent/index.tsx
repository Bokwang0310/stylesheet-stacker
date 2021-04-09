import DialogContentText from '@material-ui/core/DialogContentText';

import AddButton from 'components/ItemFormContent/AddButton';
import ColorScheme from 'components/ItemFormContent/ColorScheme';
import Typography from 'components/ItemFormContent/Typography';
import Button from 'components/ItemFormContent/Button';
import CustomElement from 'components/ItemFormContent/CustomElement';

import { useDispatchItem } from 'hooks/useDispatchItem';
import { Section } from 'state/sheets';

type Props = { section: Section; id: string };

function ItemFormContent({ section, id }: Props) {
  const { createItem } = useDispatchItem();

  switch (section.type) {
    case 'colorScheme':
      return (
        <>
          <DialogContentText>Change Color scheme</DialogContentText>
          {section.itemList.map(item => (
            <ColorScheme
              key={item.id}
              sectionID={section.id}
              item={item}
              sheetID={id}
            />
          ))}
          <AddButton
            onClick={() => createItem(id, section.id, { color: '#ffffff' })}
          />
        </>
      );

    case 'typography':
      return (
        <>
          <DialogContentText>Change Typograpyh</DialogContentText>
          {section.itemList.map(item => (
            <Typography
              key={item.id}
              sectionID={section.id}
              item={item}
              sheetID={id}
            />
          ))}
          <AddButton
            onClick={() =>
              createItem(id, section.id, {
                variant: 'h4',
                text: 'Exmaple Typography',
                css: '{ background-color: red; }',
              })
            }
          />
        </>
      );

    case 'button':
      return (
        <>
          <DialogContentText>Change Button</DialogContentText>
          {section.itemList.map(item => (
            <Button
              key={item.id}
              sectionID={section.id}
              item={item}
              sheetID={id}
            />
          ))}
          <AddButton
            onClick={() =>
              createItem(id, section.id, {
                text: 'Ex Btn',
                css: '{ color: red; }',
              })
            }
          />
        </>
      );

    case 'customElement':
      return (
        <>
          <DialogContentText>Change your custom element</DialogContentText>
          {section.itemList.map(item => (
            <CustomElement
              key={item.id}
              sectionID={section.id}
              item={item}
              sheetID={id}
            />
          ))}
          <AddButton
            onClick={() =>
              createItem(id, section.id, {
                type: 'input',
                css: '{ color: red; }',
              })
            }
          />
        </>
      );

    default:
      throw new Error();
  }
}

export default ItemFormContent;
