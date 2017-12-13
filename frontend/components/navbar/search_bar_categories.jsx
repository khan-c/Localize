import React from 'react';
import ReactSVG from 'react-svg';

class Categories extends React.Component {
  render() {
    return (
      <div className='search-categories-wrapper'>
        <ReactSVG
          path='../../assets/images/arrow.svg'
          className='search-arrow h-flip'
          wrapperClassName='testing'
        />
        <ul className='search-categories-ul'>
          <a className='search-category'>category</a>
          <a className='search-category'>category</a>
          <a className='search-category'>category</a>
          <a className='search-category'>category</a>
        </ul>
        <ReactSVG
          path='../../assets/images/arrow.svg'
          className='search-arrow'
          wrapperClassName='testing'
        />
      </div>
    );
  }
}

{/* <Icon name='arrow'
  width='256'
  height='256'
  color='#4cd695'/> */}

export default Categories;
