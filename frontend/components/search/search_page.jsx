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
    debugger 

    let searchQuery = urlToQuery(this.props.location.search); 
    if (searchQuery.location === "") {
      searchQuery.location = "San Francisco"; 
    }
    
    fetchLatLng(searchQuery.location).then(
      results => {
        console.log("RESULTS BABY", results); 
        let coordinates = results.data.results[0].geometry.location; 

        // const { detail } = this.props.location.state; 
        let query = merge({}, searchQuery, {term: searchQuery.text} ); 

        query["latitude"] = coordinates.lat; 
        query["longitude"] = coordinates.lng; 
        delete query["location"]; 

        this.props.getSearch(query); 
      }); 
    }
    // let Lat = fetchLatLng("Manhattan").then(results => results.data.results[0].geometry.location); 
    // console.log("LAATTT", Lat); 


    // debugger 
    // delete detail["text"]; 
    // let query = merge({}, detail, {term: detail.text} ); 
    // this.props.getSearch(defaultQuery); 
    // this.props.superSearch(defaultQuery); 


    // (async () => {
    //   let Lat = await fetchLatLng(this.props.location.state.detail.location); 
    //   console.log("lat", lat); 
    //   let query = merge({}, detail, {term: detail.text} ); 
    //   this.props.getSearch(defaultQuery); 
    // })(); 
  

  render() {
    debugger 
    // let rrr = this.props.getSearch(defaultQuery); //test query 
    // let Lat = fetchLatLng(this.props.location.state.detail.location); 
    // console.log("LAATTT", Lat); 
    // const { detail } = this.props.location.state; 
    // let query = merge({}, detail, {term: detail.text} ); 
    return(
      <div className="search-page-wrapper">
        <ResultsWrapper />
        <div className="map-wrapper">
          {/* <MapContainer /> */}
          <p>HELLO Search Page </p>
        </div>
      </div>
    ); 
  }
}


export default SearchPage; 