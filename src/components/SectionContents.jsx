import { createElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import ModifyIcon from '@material-ui/icons/Create';

import { openItemForm, setModifyTarget } from 'store/modules/mode';

import { detectMobile, cssToObj } from 'utils';
import useStyles from 'styles';

const ModifyButton = ({ id }) => {
  const classes = useStyles();
  const modifyMode = useSelector(state => state.mode.modifyMode);
  const dispatch = useDispatch();

  return modifyMode ? (
    <IconButton
      onClick={() => {
        dispatch(setModifyTarget(id));
        dispatch(openItemForm());
      }}
      size="small"
      className={classes.modifySectionButton}
    >
      <ModifyIcon fontSize="small" />
    </IconButton>
  ) : null;
};

function SectionContents({ section }) {
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

const generateTypography = typographyList =>
  typographyList.map(typography => (
    <Typography key={typography.id} variant={typography.variant}>
      {typography.text}
    </Typography>
  ));

const generateButton = buttonList =>
  buttonList.map(button => (
    <button key={button.id} style={cssToObj(button.css)}>
      {button.text}
    </button>
  ));

const generateCustomElement = elementList =>
  elementList.map(element =>
    createElement(
      element.type,
      { style: cssToObj(element.css), key: element.id },
      element.inner
    )
  );

export default SectionContents;
