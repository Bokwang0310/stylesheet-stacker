import { nanoid } from 'nanoid';

import Box from '@material-ui/core/Box';

import ListIcon from '@material-ui/icons/List';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import ShareIcon from '@material-ui/icons/Share';
import SearchIcon from '@material-ui/icons/Search';

import OptionalFab from 'components/OptionalFab';
import Addform from 'components/Addform';
import SheetFab from 'components/SheetFab';
// import Section from 'components/Section';
import Section from 'containers/Section';
import Subheader from 'components/Subheader';

function Sheet({
  match,
  open,
  setOpen,
  setClose,
  isAdd,
  setAddStateTrue,
  setAddStateFalse,
}) {
  const { id } = match.params;
  id.toString(); //

  return (
    <>
      <Box>
        <Subheader title="My Title" />
        <Section />
      </Box>
      <SheetFab
        isA={isAdd}
        setA={setAddStateTrue}
        setB={setAddStateFalse}
        iconA={<ListIcon />}
        iconB={<CloseIcon />}
      />
      <OptionalFab
        isAdd={isAdd}
        bottom={11}
        onClick={() => {
          setOpen();
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
        closeAddform={() => setClose()}
        handleSubmit={title => {
          console.log(title);
        }}
      >
        Enter the name of your section.
      </Addform>
    </>
  );
}

export default Sheet;
