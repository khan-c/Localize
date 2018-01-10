import React from 'react';
import Modal from 'react-modal';
import ResultsIndexItem from './results_index_item';
import LoadingIcon from './loading_icon';
import { stateToUrl, locationFromPath, termFromPath } from '../../util/parsing_functions';

class ResultsIndex extends React.Component {
  componentWillMount() {
    const path = this.props.location.search;
    event.preventDefault();
    const query = {
      text: termFromPath(path),
      location: locationFromPath(path)
    };
    this.props.autocompleteFields(query);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.search !== newProps.location.search) {
      const path = newProps.location.search;
      event.preventDefault();
      const query = {
        text: termFromPath(path),
        location: locationFromPath(path)
      };
      this.props.autocompleteFields(query);
    }
  }

  componentWillUnmount() {
    this.props.clearAutocompleteFields();
  }

  render() {
    const results = this.props.businesses;
    const { autocompleteFields, clearAutocompleteFields } = this.props;
    if (!results) {
      return <LoadingIcon />;
    }
    return( 
      <ul className="results-index">
        {results.map( (business, i) =>
          <ResultsIndexItem key={i} business={business} sequence={i+1} autocompleteFields={autocompleteFields} clearAutocompleteFields={clearAutocompleteFields}/>
        )}
      </ul>
    );
  }
}

export default ResultsIndex;
