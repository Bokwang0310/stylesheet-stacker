import { connect } from 'react-redux';

import Section from 'components/Section';

const mapStateToProps = state => ({
  sectionList: state.sheet.sectionList,
});

export default connect(mapStateToProps)(Section);
