import React from 'react';
import LandingAutocompleteIndexItem from './landing_autocomplete_index_item';

class LandingAutocompleteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { results } = this.props;
    if (!results.terms) {
      return (<div></div>);
    } else {
      return (
        <div className='landing-autocomplete-index'>
          {
            results.terms.map(term => (
              <LandingAutocompleteIndexItem key={term} term={term}/>
            ))
          }
        </div>
      );
    }
  }
}

export default LandingAutocompleteIndex;
