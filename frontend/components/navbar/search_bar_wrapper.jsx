import React from 'react';
import SearchFieldWrapper from './search_field_wrapper';
import Categories from './search_bar_categories';

class SearchBarWrapper extends React.Component {
  render () {
    return (
      <div className="search-bar-wrapper">
        <SearchFieldWrapper />
        <Categories />
      </div>
    );
  }
}

export default SearchBarWrapper;
