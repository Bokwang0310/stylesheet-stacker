import { createElement } from 'react';
import { nanoid } from 'nanoid';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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

function SectionContents({ contents }) {
  const classes = useStyles();

  return contents.map(content => {
    switch (content.contentName) {
      case 'colorScheme':
        return (
          <ListItem key={nanoid()} className={classes.root}>
            {generateColorScheme(content.colorList)}
          </ListItem>
        );
      case 'typography':
        return (
          <ListItem key={nanoid()}>
            {generateTypography(content.typography)}
          </ListItem>
        );
      case 'button':
        return (
          <ListItem key={nanoid()}>{generateButton(content.button)}</ListItem>
        );
      case 'customElement':
        return (
          <ListItem key={nanoid()}>
            {generateCustomElement(content.customElement)}
          </ListItem>
        );

      default:
        throw new Error();
    }
  });
}

const generateColorScheme = colorList =>
  colorList.map(color => (
    <Paper key={nanoid()} elevation={3} style={{ backgroundColor: color }} />
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
