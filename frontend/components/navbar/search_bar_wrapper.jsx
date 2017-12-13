import React from 'react';
import SearchFieldWrapper from './search_field_wrapper';
import Categories from './search_bar_categories';

const style = {
  searchBarWrapper: {
    height: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1000px',
    margin: 'auto',
    padding: '10px',
    boxSizing: 'border-box'
  }
};

class SearchBarWrapper extends React.Component {
  render () {
    return (
      <div style={style.searchBarWrapper}>
        <SearchFieldWrapper />
        <Categories />
      </div>
    );
  }
}

export default SearchBarWrapper;
