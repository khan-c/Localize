import React from 'react';
import ResultsWrapper from './results_wrapper';
import MapContainer from './map_container';
import merge from 'lodash/merge';
// import ResultsWrapperContainer from './results_wrapper_container';
import { fetchLatLng } from '../../util/location_util';
import { urlToQuery } from '../../util/parsing_functions';

class SearchPage extends React.Component {
  componentDidMount(){
    this.dispatchSearchFromUrl(this.props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.location !== this.props.location) {
      this.dispatchSearchFromUrl(newProps);
    }
  }

  componentWillUnmount() {
    this.props.clearSearchResults();
  }

  dispatchSearchFromUrl(props) {
    let searchQuery = urlToQuery(props.location.search);
    if (searchQuery.location === "") {
      searchQuery.location = "San Francisco";
    }
    fetchLatLng(searchQuery.location).then(
      results => {
        let coordinates = results.data.results[0].geometry.location;
        let query = merge({}, searchQuery, {term: searchQuery.text} );
        query["latitude"] = coordinates.lat;
        query["longitude"] = coordinates.lng;
        delete query["location"];
        this.props.getSearch(query);
      }
    );
  }

  render() {
    return(
      <div className="search-page-wrapper">
        <ResultsWrapper />
        <div className="map-wrapper">
          <MapContainer />
        </div>
      </div>
    );
  }
}


export default SearchPage;
