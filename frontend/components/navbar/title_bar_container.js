import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCurrentUser } from '../../actions/session_actions';

import TitleBar from './title_bar';

const mapStateToProps = ( state, ownProps ) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: () => dispatch(fetchCurrentUser())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TitleBar)
);
