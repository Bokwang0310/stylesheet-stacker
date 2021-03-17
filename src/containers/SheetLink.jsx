import { connect } from 'react-redux';

import { removeSheet } from 'store/modules/sheetList';

import SheetLink from 'components/SheetLink';

const mapDispatchToProps = dispatch => ({
  removeSheet: id => dispatch(removeSheet(id)),
});

export default connect(null, mapDispatchToProps)(SheetLink);
