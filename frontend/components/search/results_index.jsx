import React from 'react'; 
import Modal from 'react-modal'; 

const defaultQuery = {
  term: "laundry", 
  latitude: "37.786882",  
  longitude: "-122.399972", 
  category: "" 
}; 

class ResultsIndex extends React.Component {


  render() {
    let rrr = this.props.getSearch(defaultQuery); 
    debugger
    return(
      <ul className="results-index">
        
      </ul>
    ); 
  }
}

export default ResultsIndex; 