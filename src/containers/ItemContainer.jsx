import { connect } from 'react-redux';
import { removeSheet } from '../store/modules/sheets.js';

import Item from '../components/Item.jsx';

const mapDispatchToProps = dispatch => ({
  removeSheet: id => dispatch(removeSheet(id))
});

export default connect(null, mapDispatchToProps)(Item);
