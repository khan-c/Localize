import React from 'react'; 
import ResultsWrapper from './results_wrapper'; 
import Map from './map_container'; 

const defaultQuery = {
  term: "Chinese", 
  latitude: "37.786882",  
  longitude: "-122.399972", 
  category: "" 
}; 

class SearchPage extends React.Component {
  


  render() {
    let rrr = this.props.getSearch(defaultQuery); //test query 
    
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