import { connect } from 'react-redux';
import LandingSearch from './landing_search';
import { clearAutocomplete, getAutoComplete } from '../../actions/search_actions';
import { autocompleteFields, clearAutocompleteFields } from '../../actions/autocomplete_fields_actions';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => ({
  clearAutocomplete: () => dispatch(clearAutocomplete()),
  getAutoComplete: query => dispatch(getAutoComplete(query)),
  autocompleteFields: query => dispatch(autocompleteFields(query)),
  clearAutocompleteFields: () => dispatch(clearAutocompleteFields())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingSearch);
