import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createBusiness } from '../../actions/business_actions';
import { fetchLatLng } from '../../util/location_util';
import BusinessForm from './form';


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createBusiness: formBusiness => dispatch(createBusiness(formBusiness)),
  fetchLatLng: address => fetchLatLng(address)
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BusinessForm)
);
