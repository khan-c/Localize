import { connect } from 'react-redux'; 
import { withRouter } from 'react-router';

import ResultsIndex from './results_index'; 
import { 
  getSearch, 
  getAutoComplete, 
  clearSearchResults 
} from '../../actions/search_actions'; 
//testing
import SearchPage from './search_page'; 


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
  clearSearchResults: () => dispatch(clearSearchResults())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage)); 

// forwarding this to SearchPage to test passing down props 
// should be turned back to ResultsIndex when done 

