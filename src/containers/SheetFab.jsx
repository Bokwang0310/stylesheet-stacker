import { connect } from 'react-redux';
import { setOpenFab } from 'store/modules/sheetFab';
import SheetFab from 'components/SheetFab';

const mapStateToProps = state => ({
  open: state.sheetFab.openFab,
});

const mapDispatchToProps = dispatch => ({
  setOpen: open => dispatch(setOpenFab(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SheetFab);
