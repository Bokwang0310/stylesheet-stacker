import { Fragment } from 'react';
import { nanoid } from 'nanoid';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import Subheader from 'components/Subheader';
import SectionContents from 'components/SectionContents';

function Section({ sectionList, setSectionList }) {
  return sectionList.map(section => (
    <Fragment key={nanoid()}>
      <List>
        <Subheader
          title={section.title}
          id={section.id}
          sectionList={sectionList}
          setSectionList={setSectionList}
        />
        <SectionContents contents={section.contents} />
      </List>
      <Divider />
    </Fragment>
  ));
}

export default Section;
