import { connect } from 'react-redux';

import { setClose } from 'store/modules/mainAddform';
import { addSheet } from 'store/modules/sheetList';

import Addform from 'components/Addform';

const mapStateToProps = state => ({
  open: state.addform.open,
});

const mapDispatchToProps = dispatch => ({
  closeAddform: () => dispatch(setClose()),
  handleSubmit: name => dispatch(addSheet(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Addform);
