import { connect } from 'react-redux';

import SheetList from 'components/SheetList';

const mapStateToProps = state => ({
  sheets: state.sheets
});

export default connect(mapStateToProps)(SheetList);
