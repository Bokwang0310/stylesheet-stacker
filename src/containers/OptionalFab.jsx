import { connect } from 'react-redux';
import OptionalFab from 'components/OptionalFab';

const mapStateToProps = state => ({
  open: state.sheetFab.openFab,
});

export default connect(mapStateToProps)(OptionalFab);
