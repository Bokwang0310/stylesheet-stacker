import { connect } from 'react-redux';
import { setOpenAddform } from 'store/modules/sheet';
import Sheet from 'components/Sheet';

const mapStateToProps = state => ({
  open: state.sheet.openAddform,
});

const mapDispatchToProps = dispatch => ({
  setOpen: open => dispatch(setOpenAddform(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sheet);
