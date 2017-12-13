import { connect } from 'react-redux'; 
import ResultsIndex from './results_index'; 
import { 
  getSearch, 
  getAutoComplete, 
  clearSearchResults 
} from '../../actions/search_actions'; 

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsIndex); 

