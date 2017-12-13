import React from 'react';
import SearchFieldWrapper from './search_field_wrapper';
import Categories from './search_bar_categories';

class SearchBarWrapper extends React.Component {
  componentDidMount() {
    const searchWrapper = document.getElementById('search-bar-wrapper');
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 65) {
        searchWrapper.classList.add('sticky');
      } else {
        searchWrapper.classList.remove('sticky');
      }
    });
  }

  render () {
    return (
      <div id='search-bar-wrapper'>
        <div className='search-bar-wrapper' >
          <SearchFieldWrapper />
          <Categories />
        </div>
      </div>
    );
  }
}

export default SearchBarWrapper;
