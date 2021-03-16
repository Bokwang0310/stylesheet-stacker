import { createElement } from 'react';
import { nanoid } from 'nanoid';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { detectMobile } from 'utils';
import css2Obj from 'css-to-object';
const cssToObj = css => css2Obj(css, { camelCase: true });

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(10),
      height: theme.spacing(10),
      backgroundColor: '#c1f1f3',
    },
  },
}));

function SectionContents({ section }) {
  const classes = useStyles();

  switch (section.type) {
    case 'colorScheme':
      return (
        <ListItem className={classes.root}>
          {generateColorScheme(section.itemList)}
        </ListItem>
      );
    case 'typography':
      return <ListItem>{generateTypography(section.itemList)}</ListItem>;
    case 'button':
      return <ListItem>{generateButton(section.itemList)}</ListItem>;
    case 'customElement':
      return <ListItem>{generateCustomElement(section.itemList)}</ListItem>;

    default:
      throw new Error();
  }
}

const handleMouseEnter = e => {
  if (detectMobile()) return;
  console.log('in mouse enter');
};
const handleMouseLeave = e => {
  if (detectMobile()) return;
  console.log('in mouse leave');
};
const handleTouchStart = e => {
  console.log('in touch start');
};

const generateColorScheme = colorList =>
  colorList.map(color => (
    <Paper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      key={nanoid()}
      elevation={3}
      style={{ backgroundColor: color }}
    />
  ));

const generateTypography = typographyList =>
  typographyList.map(typography => (
    <Typography key={nanoid()} variant={typography.variant}>
      {typography.text}
    </Typography>
  ));

const generateButton = buttonList =>
  buttonList.map(button => (
    <button key={nanoid()} style={cssToObj(button.css)}>
      {button.text}
    </button>
  ));

const generateCustomElement = elementList =>
  elementList.map(element =>
    createElement(
      element.type,
      { style: cssToObj(element.css), key: nanoid() },
      element.inner
    )
  );

export default SectionContents;
