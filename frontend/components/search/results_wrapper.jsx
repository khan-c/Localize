import React from 'react'; 
import merge from 'lodash/merge'; 

import ResultsIndexContainer from './results_index_container'; 
import Map from './map'; 

class ResultsWrapper extends React.Component {

  render(){
    return(
      <div className="results-wrapper">
        <ResultsIndexContainer /> 
      </div>
    ); 
  }

}

export default ResultsWrapper; 