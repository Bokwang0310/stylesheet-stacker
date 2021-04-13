import { Fragment } from 'react';
import { useRecoilValue } from 'recoil';
import { nanoid } from 'nanoid';

import List from '@material-ui/core/List';

import SectionContents from 'components/SectionContents';
import { sheetListState } from 'state/sheets';

type Props = { id: string };

function Section({ id }: Props) {
  const sheetList = useRecoilValue(sheetListState);
  const targetSheet = sheetList.filter(sheet => sheet.id === id)[0];

  return (
    <>
      {targetSheet.sectionList.map(section => (
        <Fragment key={nanoid()}>
          <List>
            <SectionContents section={section} />
          </List>
        </Fragment>
      ))}
    </>
  );
}

export default Section;
