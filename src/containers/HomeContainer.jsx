import { connect } from 'react-redux';

import Home from '../components/Home.jsx';

const mapStateToProps = state => ({
  sheets: state.sheets
});

export default connect(mapStateToProps)(Home);
