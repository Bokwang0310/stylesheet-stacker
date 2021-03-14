import { connect } from 'react-redux';

import { setOpen } from 'store/modules/addform';

import MainFab from 'components/MainFab';

const mapDispatchToProps = dispatch => ({
  openAddForm: () => dispatch(setOpen()),
});

export default connect(null, mapDispatchToProps)(MainFab);
