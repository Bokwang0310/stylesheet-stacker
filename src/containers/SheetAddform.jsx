import { connect } from 'react-redux';
import { setClose } from 'store/modules/sheetAddform';
import Addform from 'components/Addform';

const mapStateToProps = state => ({
  open: state.sheetAddform.open,
});

const mapDispatchToProps = dispatch => ({
  closeAddform: () => dispatch(setClose()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Addform);
