import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import UserLinks from './title_user_links';

const mapStateToProps = ( state, ownProps ) => ({
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserLinks)
);
