import { connect } from 'react-redux';

import { setClose } from 'store/modules/addform';
import { addSheet } from 'store/modules/sheets';

import AddForm from 'components/AddForm';

const mapStateToProps = state => ({
  open: state.addform.open
});

const mapDispatchToProps = dispatch => ({
  closeAddForm: () => dispatch(setClose()),
  addSheet: name => dispatch(addSheet(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
