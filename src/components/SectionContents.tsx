import React from 'react';
import { createElement } from 'react';
import { nanoid } from 'nanoid';

import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';

import ModifyButton from 'components/ModifyButton';
import DeleteButton from 'components/DeleteButton';
import { detectMobile, cssToObj, checkValidTagName } from 'utils';
import useStyles from 'styles';
import {
  Section,
  ColorItem,
  TypographyItem,
  ButtonItem,
  CustomElementItem,
} from 'state/types';

type Props = {
  section: Section;
};

function SectionContents({ section }: Props) {
  const classes = useStyles();

  switch (section.type) {
    case 'color':
      return (
        <ListItem className={classes.colorPaperRoot}>
          {/* <Grid container direction="column" style={{ width: 40 }}> */}
          <ModifyButton id={section.id} key={nanoid()} />
          <DeleteButton id={section.id} />
          {/* </Grid> */}
          {[...generateColorScheme(section.itemList)]}
        </ListItem>
      );
    case 'typography':
      return (
        <ListItem className={classes.typographyRoot}>
          <Grid container direction="column" style={{ width: 40 }}>
            <ModifyButton id={section.id} key={nanoid()} />
            <DeleteButton id={section.id} />
          </Grid>
          {[...generateTypography(section.itemList)]}
        </ListItem>
      );
    case 'button':
      return (
        <ListItem className={classes.buttonRoot}>
          <Grid container direction="column" style={{ width: 40 }}>
            <ModifyButton id={section.id} key={nanoid()} />
            <DeleteButton id={section.id} />
          </Grid>
          {[...generateButton(section.itemList)]}
        </ListItem>
      );
    case 'customElement':
      return (
        <ListItem className={classes.sectionContentRoot}>
          <Grid container direction="column" style={{ width: 40 }}>
            <ModifyButton id={section.id} key={nanoid()} />
            <DeleteButton id={section.id} />
          </Grid>
          {[...generateCustomElement(section.itemList)]}
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

const generateColorScheme = (colorList: ColorItem[]) =>
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

const generateTypography = (typographyList: TypographyItem[]) =>
  typographyList.map(typography =>
    createElement(typography.variant, {
      style: cssToObj(typography.css),
      key: typography.id,
      children: typography.text,
    })
  );

const generateButton = (buttonList: ButtonItem[]) =>
  buttonList.map(button => (
    <button key={button.id} style={cssToObj(button.css)}>
      {button.text}
    </button>
  ));

const generateCustomElement = (elementList: CustomElementItem[]) => {
  return elementList.map(element => {
    if (
      typeof element.elementType === 'undefined' ||
      typeof element.css === 'undefined'
    )
      return null;

    return createElement(
      checkValidTagName(element.elementType) ? element.elementType : 'p',
      { style: cssToObj(element.css), key: element.id }
      // element.inner
    );
  });
};

export default SectionContents;
