import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LandingSearch from './landing_search';
import { clearAutocomplete, getAutoComplete } from '../../actions/search_actions';
import { autocompleteFields, clearAutocompleteFields } from '../../actions/autocomplete_fields_actions';

const mapStateToProps = state => {
  return {
    autocompleteValues: state.ui.autocomplete
  };
};

const mapDispatchToProps = dispatch => ({
  clearAutocomplete: () => dispatch(clearAutocomplete()),
  getAutoComplete: query => dispatch(getAutoComplete(query)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingSearch));
