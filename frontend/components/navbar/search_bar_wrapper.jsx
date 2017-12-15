import React from 'react';
import SearchFieldWrapper from './search_field_wrapper';
import Categories from './search_bar_categories';
import { withRouter } from 'react-router-dom';

class SearchBarWrapper extends React.Component {
  componentDidMount() {
    const searchWrapper = document.getElementById('search-bar-wrapper');
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 65) {
        searchWrapper.classList.add('sticky');
      } else {
        searchWrapper.classList.remove('sticky');
        console.log(this.props.location.pathname);
        if (this.props.location.pathname === '/') {
          searchWrapper.setAttribute('style', 'backgroundColor: #E9FBFC');
        }
      }
    });
  }

  render () {
    let style;
    if (this.props.location.pathname !== '/') {
      style = {
        backgroundColor: 'white',
      };
    }
    return (
      <div id='search-bar-wrapper' style={style}>
        <div className='search-bar-wrapper'>
          <SearchFieldWrapper />
          <Categories />
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBarWrapper);
