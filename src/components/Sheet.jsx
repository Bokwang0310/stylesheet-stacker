import { useState, createElement, Fragment } from 'react';
import { nanoid } from 'nanoid';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import Typography from '@material-ui/core/Typography';

import ListIcon from '@material-ui/icons/List';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import ShareIcon from '@material-ui/icons/Share';
import SearchIcon from '@material-ui/icons/Search';

import Subheader from 'components/Subheader';
import FabOption from 'components/FabOption';

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
  title: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 3,
  },
}));

function Sheet({ match }) {
  const { id } = match.params;
  console.log(id);
  const classes = useStyles();

  const [isAdd, setAddState] = useState(true);
  const [sectionList, setSectionList] = useState([
    {
      id: nanoid(),
      title: 'Create your own section',
      contents: [
        {
          contentName: 'colorScheme',
          colorList: ['#c1f1f3', '#E99B9B', '#9BDEE9'],
        },
        {
          contentName: 'typography',
          typography: [
            { variant: 'h4', text: 'First world!', css: {} },
            { variant: 'h5', text: 'Second Hello!', css: {} },
            { variant: 'h6', text: 'Wow my name!', css: {} },
          ],
        },
        { contentName: 'button', button: [{ text: 'My btn', css: {} }] },
        {
          contentName: 'customElement',
          customElement: [
            { type: 'button', css: {}, inner: 'hello?' },
            { type: 'input', css: {} },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <Box className={classes.list}>
        {generateSection(sectionList, classes.root, setSectionList)}
      </Box>
      <Zoom in={isAdd}>
        <Fab
          className={classes.fabButton}
          color="secondary"
          onClick={() => setAddState(false)}
        >
          <ListIcon />
        </Fab>
      </Zoom>
      <Zoom in={!isAdd}>
        <Fab
          className={classes.fabButton}
          color="secondary"
          onClick={() => setAddState(true)}
        >
          <CloseIcon />
        </Fab>
      </Zoom>
      <FabOption
        isAdd={isAdd}
        bottom={11}
        onClick={() => console.log('Hello in create button')}
      >
        <AddIcon />
      </FabOption>
      <FabOption isAdd={isAdd} bottom={20}>
        <ShareIcon />
      </FabOption>
      <FabOption isAdd={isAdd} bottom={29}>
        <SearchIcon />
      </FabOption>
    </>
  );
}

const generateSection = (sectionList, rootClass, setSectionList) =>
  sectionList.map(section => (
    <Fragment key={nanoid()}>
      <List>
        <Subheader
          title={section.title}
          id={section.id}
          sectionList={sectionList}
          setSectionList={setSectionList}
        />
        {section.contents.map(content => {
          switch (content.contentName) {
            case 'colorScheme':
              return (
                <ListItem key={nanoid()} className={rootClass}>
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
                <ListItem key={nanoid()}>
                  {generateButton(content.button)}
                </ListItem>
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
        })}
      </List>
      <Divider />
    </Fragment>
  ));

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
    <button key={nanoid()} style={button.css}>
      {button.text}
    </button>
  ));

const generateCustomElement = elementList =>
  elementList.map(element =>
    createElement(
      element.type,
      { style: element.css, key: nanoid() },
      element.inner
    )
  );

// make (plain text css to javascript object css) function

export default Sheet;
