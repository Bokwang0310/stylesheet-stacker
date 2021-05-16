import React, { createElement } from 'react';

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
        <Grid container>
          <Grid item className={classes.buttonContainer}>
            <ModifyButton id={section.id} />
            <DeleteButton id={section.id} />
          </Grid>
          <Grid item>
            <ListItem className={classes.colorPaperRoot}>
              {[...generateColorScheme(section.itemList)]}
            </ListItem>
          </Grid>
        </Grid>
      );
    case 'typography':
      return (
        <Grid container>
          <Grid item className={classes.buttonContainer}>
            <ModifyButton id={section.id} />
            <DeleteButton id={section.id} />
          </Grid>
          <Grid item>
            <ListItem className={classes.typographyRoot}>
              {[...generateTypography(section.itemList)]}
            </ListItem>
          </Grid>
        </Grid>
      );
    case 'button':
      return (
        <Grid container>
          <Grid item className={classes.buttonContainer}>
            <ModifyButton id={section.id} />
            <DeleteButton id={section.id} />
          </Grid>
          <Grid item>
            <ListItem className={classes.buttonRoot}>
              {[...generateButton(section.itemList)]}
            </ListItem>
          </Grid>
        </Grid>
      );
    case 'customElement':
      return (
        <Grid container>
          <Grid item className={classes.buttonContainer}>
            <ModifyButton id={section.id} />
            <DeleteButton id={section.id} />
          </Grid>
          <Grid item>
            <ListItem className={classes.sectionContentRoot}>
              {[...generateCustomElement(section.itemList)]}
            </ListItem>
          </Grid>
        </Grid>
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
