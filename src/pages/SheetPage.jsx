import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Box from '@material-ui/core/Box';

import ListIcon from '@material-ui/icons/List';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import HomeIcon from '@material-ui/icons/Home';

import NotFoundPage from 'pages/NotFoundPage';
import SheetFab from 'components/SheetFab';
import OptionalFab from 'components/OptionalFab';
import Section from 'components/Section';
import SheetAddform from 'components/SheetAddform';
import Subheader from 'components/Subheader';
import ItemForm from 'components/ItemForm';

import { setOpen } from 'store/modules/sheetAddform';
import { createSection } from 'store/modules/sheet';
import { toggleModifyMode } from 'store/modules/mode';

function SheetPage({ match }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = match.params;

  const openItemForm = useSelector(state => state.mode.openItemForm);
  const idList = useSelector(state => state.sheetList.map(sheet => sheet.id));
  if (!idList.includes(id)) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Box>
        <Subheader id={id} />
        <Section id={id} />
      </Box>
      <SheetFab iconA={<ListIcon />} iconB={<CloseIcon />} />
      <OptionalFab bottom={11} onClick={() => dispatch(setOpen())}>
        <AddIcon />
      </OptionalFab>
      <OptionalFab bottom={29} onClick={() => history.push('/sheets')}>
        <HomeIcon />
      </OptionalFab>
      <OptionalFab bottom={20} onClick={() => dispatch(toggleModifyMode())}>
        <CreateIcon />
      </OptionalFab>
      <OptionalFab bottom={11} onClick={() => dispatch(setOpen())}>
        <AddIcon />
      </OptionalFab>
      <SheetAddform
        title="Add Section"
        handleSubmit={sectionType => {
          dispatch(createSection(id, sectionType));
        }}
      >
        Enter the name of your section.
      </SheetAddform>
      {openItemForm ? <ItemForm id={id} /> : null}
    </>
  );
}

export default SheetPage;
