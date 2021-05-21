import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import Box from '@material-ui/core/Box';

import ListIcon from '@material-ui/icons/List';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import ModifyIcon from '@material-ui/icons/Create';
import HomeIcon from '@material-ui/icons/Home';

import NotFoundPage from 'pages/NotFoundPage';
import SheetFab from 'components/SheetFab';
import OptionalFab from 'components/OptionalFab';
import Section from 'components/Section';
import SheetAddform from 'components/SheetAddform';
import Subheader from 'components/Subheader';
import ItemForm from 'components/ItemForm';

import { sheetFabState } from 'state/sheetFab';
import { itemFormState, sheetAddformState } from 'state/form';
import { modifyModeState } from 'state/modifyMode';
import { useDispatchSheet } from 'hooks/useDispatchSheet';
import { useDispatchSection } from 'hooks/useDispatchSection';

// URL 파라미터를 받아오는 리액트 라우터 훅에 쓰임
type Param = {
  id: string;
};

function SheetPage() {
  const history = useHistory();
  const { exist } = useDispatchSheet();
  const { isEmptySection, createSection } = useDispatchSection();

  const [mode, setMode] = useRecoilState(modifyModeState);
  const itemFormOpen = useRecoilValue(itemFormState);
  const setAddformState = useSetRecoilState(sheetAddformState);
  const setFabState = useSetRecoilState(sheetFabState);

  useEffect(() => () => setFabState(false));

  // 페이지를 나갈 때 수정 모드 끄기
  useEffect(() => () => setMode(false), [setMode]);

  const { id } = useParams<Param>();
  if (!exist(id)) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Box>
        <Subheader id={id} />
        <Section id={id} />
      </Box>
      <SheetFab iconA={<ListIcon />} iconB={<CloseIcon />} />
      {/* Home Modify Add */}
      <OptionalFab bottom={29} onClick={() => history.push('/')}>
        <HomeIcon />
      </OptionalFab>
      <OptionalFab
        bottom={20}
        onClick={() => setMode(!mode)}
        disabled={isEmptySection(id)}
      >
        <ModifyIcon />
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
