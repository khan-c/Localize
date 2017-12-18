import React from 'react';
import NavbarAutocompleteIndexItem from './navbar_autocomplete_index_item';

class NavbarAutocompleteIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(term) {
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
        <div className='navbar-autocomplete-index'>
          {
            results.terms.map(term => (
              <NavbarAutocompleteIndexItem
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

export default NavbarAutocompleteIndex;
