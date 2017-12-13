import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SessionLinks from './title_session_links';

const mapStateToProps = ( state, ownProps ) => ({
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SessionLinks)
);
