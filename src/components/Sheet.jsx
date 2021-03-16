import Box from '@material-ui/core/Box';

import ListIcon from '@material-ui/icons/List';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import ShareIcon from '@material-ui/icons/Share';
import SearchIcon from '@material-ui/icons/Search';

import SheetFab from 'containers/SheetFab';
import OptionalFab from 'containers/OptionalFab';
import Section from 'containers/Section';
// import Addform from 'components/Addform';
import SheetAddform from 'containers/SheetAddform';
import Subheader from 'components/Subheader';

function Sheet({ match, setOpen }) {
  const { id } = match.params;

  return (
    <>
      <Box>
        <Subheader title="My Title" />
        <Section />
      </Box>
      <SheetFab iconA={<ListIcon />} iconB={<CloseIcon />} />
      <OptionalFab bottom={11}>
        <AddIcon onClick={() => setOpen()} />
      </OptionalFab>
      <OptionalFab bottom={20}>
        <ShareIcon />
      </OptionalFab>
      <OptionalFab bottom={29}>
        <SearchIcon />
      </OptionalFab>
      <SheetAddform
        title="Add Section"
        handleSubmit={title => {
          console.log(title, id);
        }}
      >
        Enter the name of your section.
      </SheetAddform>
    </>
  );
}

export default Sheet;
