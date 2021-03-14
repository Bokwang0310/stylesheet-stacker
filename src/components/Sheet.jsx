import { useState } from 'react';
import { nanoid } from 'nanoid';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import ListIcon from '@material-ui/icons/List';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import ShareIcon from '@material-ui/icons/Share';
import SearchIcon from '@material-ui/icons/Search';

import OptionalFab from 'components/OptionalFab';
import Addform from 'components/Addform';
import SheetFab from 'components/SheetFab';
import Section from 'components/Section';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

function Sheet({ match }) {
  const { id } = match.params;
  id.toString(); //

  const classes = useStyles();

  const [open, setOpen] = useState(false);
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
        <Section sectionList={sectionList} setSectionList={setSectionList} />
      </Box>
      <SheetFab
        isA={isAdd}
        setA={setAddState}
        iconA={<ListIcon />}
        iconB={<CloseIcon />}
      />
      <OptionalFab
        isAdd={isAdd}
        bottom={11}
        onClick={() => {
          setOpen(true);
        }}
      >
        <AddIcon />
      </OptionalFab>
      <OptionalFab isAdd={isAdd} bottom={20}>
        <ShareIcon />
      </OptionalFab>
      <OptionalFab isAdd={isAdd} bottom={29}>
        <SearchIcon />
      </OptionalFab>
      <Addform
        title="Add Section"
        open={open}
        closeAddform={() => setOpen(false)}
        handleSubmit={title => {
          setSectionList([
            ...sectionList,
            {
              id: nanoid(),
              title,
              contents: [],
            },
          ]);
        }}
      >
        Enter the name of your section.
      </Addform>
    </>
  );
}

export default Sheet;
