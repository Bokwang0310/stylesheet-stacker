import React from 'react';
import { createElement } from 'react';
import { nanoid } from 'nanoid';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import ModifyIcon from '@material-ui/icons/Create';

import { detectMobile, cssToObj, checkValidTagName } from 'utils';
import useStyles from 'styles';
import { SheetType, ItemType } from 'store/modules/sheet';
import { itemFormState } from 'state/form';
import { modifyModeState, modifyTargetState } from 'state/modifyMode';

type Props = { id: string };

const ModifyButton = ({ id }: Props) => {
  const classes = useStyles();

  const modifyMode = useRecoilValue(modifyModeState);
  const setModifyTarget = useSetRecoilState(modifyTargetState);

  const setFormState = useSetRecoilState(itemFormState);

  return modifyMode ? (
    <IconButton
      onClick={() => {
        setModifyTarget(id);
        setFormState(true);
      }}
      size="small"
      className={classes.modifySectionButton}
    >
      <ModifyIcon fontSize="small" />
    </IconButton>
  ) : null;
};

function SectionContents({ section }: { section: SheetType }) {
  const classes = useStyles();

  switch (section.type) {
    case 'colorScheme':
      return (
        <ListItem className={classes.colorPaperRoot}>
          {[
            <ModifyButton id={section.id} key={nanoid()} />,
            ...generateColorScheme(section.itemList),
          ]}
        </ListItem>
      );
    case 'typography':
      return (
        <ListItem className={classes.typographyRoot}>
          {[
            <ModifyButton id={section.id} key={nanoid()} />,
            ...generateTypography(section.itemList),
          ]}
        </ListItem>
      );
    case 'button':
      return (
        <ListItem className={classes.buttonRoot}>
          {[
            <ModifyButton id={section.id} key={nanoid()} />,
            ...generateButton(section.itemList),
          ]}
        </ListItem>
      );
    case 'customElement':
      return (
        <ListItem className={classes.sectionContentRoot}>
          {[
            <ModifyButton id={section.id} key={nanoid()} />,
            ...generateCustomElement(section.itemList),
          ]}
        </ListItem>
      );

    default:
      throw new Error();
  }
}

const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  if (detectMobile()) return;
  // console.log('in mouse enter');
};
const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  if (detectMobile()) return;
  // console.log('in mouse leave');
};
const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
  // console.log('in touch start');
};

const generateColorScheme = (colorList: ItemType[]) =>
  colorList.map(color => {
    return (
      <Paper
        key={color.id}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        elevation={3}
        style={{ backgroundColor: color.color }}
      />
    );
  });

const generateTypography = (typographyList: ItemType[]) =>
  typographyList.map(typography => {
    if (
      typeof typography.variant === 'undefined' &&
      typography.variant !== 'h1' &&
      typography.variant !== 'h2' &&
      typography.variant !== 'h3' &&
      typography.variant !== 'h4' &&
      typography.variant !== 'h5' &&
      typography.variant !== 'h6'
    ) {
      return (
        <Typography key={typography.id} variant={typography.variant}>
          {typography.text}
        </Typography>
      );
    }

    return <Typography key={typography.id}>{typography.text}</Typography>;
  });

const generateButton = (buttonList: ItemType[]) =>
  buttonList.map(button => (
    <button key={button.id} style={cssToObj(button.css)}>
      {button.text}
    </button>
  ));

const generateCustomElement = (elementList: ItemType[]) => {
  return elementList.map(element => {
    if (
      typeof element.type === 'undefined' ||
      typeof element.css === 'undefined'
    )
      return null;

    return createElement(
      checkValidTagName(element.type) ? element.type : 'p',
      { style: cssToObj(element.css), key: element.id }
      // element.inner
    );
  });
};

export default SectionContents;
