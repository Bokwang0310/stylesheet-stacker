import { connect } from 'react-redux';

import {
  openAddform,
  closeAddform,
  unfoldFab,
  foldFab,
} from 'store/modules/sheet';

import Sheet from 'components/Sheet';

const mapStateToProps = state => ({
  open: state.sheet.isOpenAddform,
  isAdd: state.sheet.isUnfoldFab,
});

const mapDispatchToProps = dispatch => ({
  setOpen: () => dispatch(openAddform()),
  setClose: () => dispatch(closeAddform()),
  setAddStateTrue: () => dispatch(unfoldFab()),
  setAddStateFalse: () => dispatch(foldFab()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sheet);
