import { connect } from 'react-redux';
import { setOpen } from 'store/modules/sheetAddform';
import Sheet from 'components/Sheet';

const mapStateToProps = state => ({
  open: state.sheetAddform.open,
});

const mapDispatchToProps = dispatch => ({
  setOpen: () => dispatch(setOpen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sheet);
