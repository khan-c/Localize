import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  saveBusinessDetails,
  clearBusinessForm
} from '../../actions/business_form_actions';
import { createBusiness } from '../../actions/business_actions';
import BusinessForm from './form';


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  saveBusinessDetails: details => dispatch(saveBusinessDetails(details)),
  clearBusinessForm: () => dispatch(clearBusinessForm()),
  createBusiness: formBusiness => dispatch(createBusiness(formBusiness))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BusinessForm)
);
