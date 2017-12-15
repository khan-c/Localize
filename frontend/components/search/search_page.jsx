import React from 'react'; 
import ResultsWrapper from './results_wrapper'; 
import MapContainer from './map_container'; 
import merge from 'lodash/merge'; 
// import ResultsWrapperContainer from './results_wrapper_container'; 

const defaultQuery = {
  term: "Chinese", 
  latitude: "37.786882",  
  longitude: "-122.399972", 
  category: "" 
}; 

class SearchPage extends React.Component {
  componentDidMount(){
    const { detail } = this.props.location.state; 
    let query = merge({}, detail, {term: detail.text} ); 
    this.props.getSearch(query); 
  }
  
  render() {
    debugger 
    // let rrr = this.props.getSearch(defaultQuery); //test query 
    const { detail } = this.props.location.state; 
    let query = merge({}, detail, {term: detail.text} ); 
    return(
      <div className="search-page-wrapper">
        <ResultsWrapper query={query}/>
        <div className="map-wrapper">
          {/* <MapContainer /> */}
          <p>HELLO Search Page </p>
        </div>
      </div>
    ); 
  }
}


export default SearchPage; 