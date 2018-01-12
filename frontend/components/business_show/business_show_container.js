import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BusinessShow from './business_show';
import { showBusiness, showRegBusiness, clearBusiness } from '../../actions/business_actions';
import { clearAutocompleteFields } from '../../actions/autocomplete_fields_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    businessId: ownProps.match.params.id,
    business: state.entities.business,
    singleBusinessLoading: state.ui.loading.singleBusinessLoading
  };
};

const mapDispatchToprops = dispatch => ({
  showBusiness: businessId => dispatch(showBusiness(businessId)),
  showRegBusiness: businessId => dispatch(showRegBusiness(businessId)),
  clearBusiness: () => dispatch(clearBusiness()),
  clearAutocompleteFields: () => dispatch(clearAutocompleteFields())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToprops
)(BusinessShow));
