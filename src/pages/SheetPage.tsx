import { useHistory, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

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

import { itemFormState, sheetAddformState } from 'state/form';
import { modifyModeState } from 'state/modifyMode';
import { sheetListState } from 'state/sheets';
import { useDispatchSection } from 'hooks/useDispatchSection';

// URL 파라미터를 받아오는 리액트 라우터 훅에 쓰임
type Param = {
  id: string;
};

function SheetPage() {
  const history = useHistory();
  const { createSection } = useDispatchSection();

  const itemFormOpen = useRecoilValue(itemFormState);
  const setAddformState = useSetRecoilState(sheetAddformState);
  const [mode, setMode] = useRecoilState(modifyModeState);
  const [sheetList] = useRecoilState(sheetListState);

  const idList = sheetList.map(sheet => sheet.id);
  const { id } = useParams<Param>();
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
      <OptionalFab bottom={29} onClick={() => history.push('/sheets')}>
        <HomeIcon />
      </OptionalFab>
      <OptionalFab bottom={20} onClick={() => setMode(!mode)}>
        <CreateIcon />
      </OptionalFab>
      <OptionalFab bottom={11} onClick={() => setAddformState(true)}>
        <AddIcon />
      </OptionalFab>
      <SheetAddform
        title="Add Section"
        handleSubmit={(sectionType: string) => createSection(id, sectionType)}
      >
        Enter the name of your section.
      </SheetAddform>
      {itemFormOpen && <ItemForm id={id} />}
    </>
  );
}

export default SheetPage;
