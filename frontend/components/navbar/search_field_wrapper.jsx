import React from 'react';
import SearchBarInput from './search_bar_input';

class SearchFieldWrapper extends React.Component {
  render () {
    return (
      <div id='search-field-wrapper'>
        <SearchBarInput/>
      </div>
    );
  }
}

export default SearchFieldWrapper;
