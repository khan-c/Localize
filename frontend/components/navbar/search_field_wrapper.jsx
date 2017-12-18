import React from 'react';
import SearchBarInput from './search_bar_input';
import SearchBarInputContainer from './search_bar_input_container.js'; 

class SearchFieldWrapper extends React.Component {
  render () {
    return (
      <div>
        <SearchBarInputContainer/>
      </div>
    );
  }
}

export default SearchFieldWrapper;
