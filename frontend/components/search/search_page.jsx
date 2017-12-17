import React from 'react';
import ResultsWrapper from './results_wrapper';
import MapContainer from './map_container';
import merge from 'lodash/merge';
// import ResultsWrapperContainer from './results_wrapper_container';
import {fetchLatLng} from '../../util/location_util';
import { superSearch } from '../../actions/search_actions';
import { urlToQuery } from '../../util/parsing_functions';

const defaultQuery = {
  term: "Chinese",
  // latitude: "37.786882",
  // longitude: "-122.399972",
  location: "Manhattan",
  category: ""
};

class SearchPage extends React.Component {
  componentDidMount(){
    // pulls URL from history and converts to a query object
    let searchQuery = urlToQuery(this.props.location.search);
    if (searchQuery.location === "") {
      searchQuery.location = "San Francisco";
    }
    // Get Latitude and Longitude from Google Maps Geocode API from the location provided by search
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

  componentWillReceiveProps(newProps) {
    if (newProps.location !== this.props.location) {
      // pulls URL from history and converts to a query object
      let searchQuery = urlToQuery(newProps.location.search);
      if (searchQuery.location === "") {
        searchQuery.location = "San Francisco";
      }
      // Get Latitude and Longitude from Google Maps Geocode API from the location provided by search
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
  }

  componentWillUnmount() {
    this.props.clearSearchResults();
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
