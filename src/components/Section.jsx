import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import List from '@material-ui/core/List';

import SectionContents from 'components/SectionContents';

function Section() {
  const sectionList = useSelector(state => state.sheet.sectionList);
  return sectionList.map(section => (
    <Fragment key={nanoid()}>
      <List>
        <SectionContents section={section} />
      </List>
    </Fragment>
  ));
}

export default Section;
