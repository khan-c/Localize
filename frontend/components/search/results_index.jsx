import React from 'react';
import Modal from 'react-modal';
import ResultsIndexItem from './results_index_item';
import LoadingIcon from './loading_icon';

const defaultQuery = {
  term: "Chinese",
  // latitude: "37.786882",
  // longitude: "-122.399972",
  location: "San20%Francisco",
  category: ""
};

class ResultsIndex extends React.Component {

  render() {
    let results = this.props.businesses;

    if (!results) {
      return <LoadingIcon />;
    }
    return(
      <ul className="results-index" id="results-indexid">
        {results.map( business => <ResultsIndexItem id={business.id} key={business.id} business={business}/> )}
      </ul>
    );
  }
}

export default ResultsIndex;
