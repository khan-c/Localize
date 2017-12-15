import { connect } from 'react-redux'; 
import Map from './map'; 
import {withRouter } from 'react-router'; 

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
  // getSearch: query => dispatch(getSearch(query)), 
  // getAutoComplete: query => dispatch(getAutoComplete(query)), 
  // clearSearchResults: () => dispatch(clearSearchResults())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)); 
