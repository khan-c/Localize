import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearAutocomplete, getAutoComplete,getSearch } from '../../actions/search_actions';
import { autocompleteFields, clearAutocompleteFields } from '../../actions/autocomplete_fields_actions';
import SearchBarInput from './search_bar_input'; 

const mapStateToProps = state => {
  return {
    autocompleteValues: state.ui.autocomplete
  };
};

const mapDispatchToProps = dispatch => ({
  clearAutocomplete: () => dispatch(clearAutocomplete()),
  getAutoComplete: query => dispatch(getAutoComplete(query)),
  getSearch: query => dispatch(getSearch(query)), 
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBarInput));
