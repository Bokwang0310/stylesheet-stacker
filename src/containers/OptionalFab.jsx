import { connect } from 'react-redux';
import OptionalFab from 'components/OptionalFab';

const mapStateToProps = state => ({
  open: state.sheet.openFab,
});

export default connect(mapStateToProps)(OptionalFab);
