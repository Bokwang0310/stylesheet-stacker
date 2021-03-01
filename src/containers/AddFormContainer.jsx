import { setClose } from '../store/modules/addform.js';
import { addSheet } from '../store/modules/sheets.js';
import { connect } from 'react-redux';

import AddForm from '../components/AddForm.jsx';

const mapStateToProps = state => ({
  open: state.addform.open
});
const mapDispatchToProps = dispatch => ({
  closeAddForm: () => dispatch(setClose()),
  addSheet: name => dispatch(addSheet(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
