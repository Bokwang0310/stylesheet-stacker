import { connect } from 'react-redux';

import { setOpen } from 'store/modules/addform';
import FAB from 'components/FAB';

const mapDispatchToProps = dispatch => ({
  openAddForm: () => dispatch(setOpen())
});

export default connect(null, mapDispatchToProps)(FAB);
