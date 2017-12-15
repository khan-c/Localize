import React from 'react'; 
import Modal from 'react-modal'; 
import ResultsIndexItem from './results_index_item'; 

const defaultQuery = {
  term: "Chinese", 
  // latitude: "37.786882",  
  // longitude: "-122.399972", 
  location: "San20%Francisco", 
  category: "" 
}; 

class ResultsIndex extends React.Component {
  
  render() {
    // let results = this.props.getSearch(defaultQuery); //test query 
    let results = this.props.businesses; 
    debugger 

    if (!results) {
      return null; 
    }
    return(
      <ul className="results-index">
        {results.map( business => <ResultsIndexItem key={business.id} business={business}/> )}
      </ul>
    ); 
  }
}

export default ResultsIndex; 
