import { setOpen } from '../store/modules/addform.js';
import { connect } from 'react-redux';

import FAB from '../components/FAB.jsx';

const mapDispatchToProps = dispatch => ({
  openAddForm: () => dispatch(setOpen())
});

export default connect(null, mapDispatchToProps)(FAB);
