import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ResultsIndex from './results_index';
import {
  getSearch,
  getAutoComplete,
  clearSearchResults
} from '../../actions/search_actions';
import SearchPage from './search_page';
import { autocompleteFields, clearAutocompleteFields } from '../../actions/autocomplete_fields_actions';

const mapStateToProps = ( {entities} ) => {
  return (
    {
    businesses: entities.search.businesses,
    query: entities.search.query,
    region: entities.search.region
    }
  );
};

const mapDispatchToProps = dispatch => ({
  getSearch: query => dispatch(getSearch(query)),
  getAutoComplete: query => dispatch(getAutoComplete(query)),
  clearSearchResults: () => dispatch(clearSearchResults()),
  autocompleteFields: query => dispatch(autocompleteFields(query)),
  clearAutocompleteFields: () => dispatch(clearAutocompleteFields())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsIndex));

// forwarding this to SearchPage to test passing down props
// should be turned back to ResultsIndex when done
