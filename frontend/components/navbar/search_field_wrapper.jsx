import React from 'react';
import SearchBarInput from './search_bar_input';
import SearchBarInputContainer from './search_bar_input_container.js';
import NavbarAutocompleteIndexContainer from './navbar_autocomplete_index_container';

class SearchFieldWrapper extends React.Component {
  render () {
    return (
      <div className='search-field-wrapper' id='search-field-wrapper'>
        <SearchBarInputContainer/>
        <NavbarAutocompleteIndexContainer />
      </div>
    );
  }
}

export default SearchFieldWrapper;
