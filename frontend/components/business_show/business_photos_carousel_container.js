import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BusinessPhotosCarousel from './business_photos_carousel';
import { showBusiness, clearBusiness } from '../../actions/business_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    business: state.entities.business,
    singleBusinessLoading: state.ui.loading.singleBusinessLoading
  };
};

const mapDispatchToprops = dispatch => ({
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToprops
)(BusinessPhotosCarousel));
