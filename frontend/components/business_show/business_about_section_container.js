import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BusinessAboutSection from './business_about_section';
import { showBusiness, clearBusiness } from '../../actions/business_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    businessId: ownProps.match.params.id,
    business: state.entities.business,
    singleBusinessLoading: state.ui.loading.singleBusinessLoading
  };
};

const mapDispatchToprops = dispatch => ({
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToprops
)(BusinessAboutSection));
