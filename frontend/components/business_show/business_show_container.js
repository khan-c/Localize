import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BusinessShow from './business_show';
import { showBusiness, clearBusiness } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    business: state.entities.business
  };
};

const mapDispatchToprops = dispatch => ({
  showBusiness: () => dispatch(showBusiness()),
  clearBusiness: () => dispatch(clearBusiness()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToprops
)(BusinessShow));
