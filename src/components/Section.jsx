import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import List from '@material-ui/core/List';

import SectionContents from 'components/SectionContents';

function Section({ id }) {
  const sheetList = useSelector(state => state.sheet);
  const targetSheet = sheetList.filter(sheet => sheet.id === id)[0];
  return targetSheet.sectionList.map(section => (
    <Fragment key={nanoid()}>
      <List>
        <SectionContents section={section} />
      </List>
    </Fragment>
  ));
}

export default Section;
