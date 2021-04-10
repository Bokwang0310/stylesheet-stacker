import { Fragment } from 'react';
import { useRecoilValue } from 'recoil';
import { nanoid } from 'nanoid';

import List from '@material-ui/core/List';

import SectionContents from 'components/SectionContents';
import { sheetListState } from 'state/sheets';
import {
  ColorSection,
  TypographySection,
  ButtonSection,
  CustomElementSection,
} from 'state/sheets';

type Props = { id: string };
type Section =
  | ColorSection
  | TypographySection
  | ButtonSection
  | CustomElementSection;

function Section({ id }: Props) {
  const sheetList = useRecoilValue(sheetListState);
  const targetSheet = sheetList.filter(sheet => sheet.id === id)[0];
  return (
    <>
      {targetSheet.sectionList.map((section: Section) => (
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
