import React from 'react';
import LandingAutocompleteIndexItem from './landing_autocomplete_index_item';

class LandingAutocompleteIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(term) {
    console.log('handle click');
    const query = {
      text: term,
    };
    this.props.autocompleteFields(query);
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
              <LandingAutocompleteIndexItem
                key={term}
                term={term}
                handleClick={this.handleClick}
              />
            ))
          }
        </div>
      );
    }
  }
}

export default LandingAutocompleteIndex;
