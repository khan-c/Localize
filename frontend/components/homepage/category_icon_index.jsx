import React from 'react';
import ReactSVG from 'react-svg';

const CategoryIconIndex = () => (
  <div className='category-icon-index'>
    <h1>Mission</h1>
    <span className='category-icon-text display-text'>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Proin in elit erat. Vestibulum
      et enim bibendum, molestie ex non, ullamcorper sapien.
      Curabitur eu metus mi. Maecenas ac sapien suscipit, aliquam
      tortor lacinia, pretium mauris.
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Proin in elit erat. Vestibulum
      et enim bibendum, molestie ex non.
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Proin in elit erat. Vestibulum
      et enim bibendum, molestie ex non, ullamcorper sapien.
      Curabitur eu metus mi.
    </span>
    <div className='icons'>
      <div className='icon-links-wrapper'>
        <ReactSVG
          path='../../assets/images/art.svg'
          className='category-icon art-icon'
        />
        <a className='icon-link'>Art</a>
      </div>
      <div className='icon-links-wrapper'>
        <ReactSVG
          path='../../assets/images/fitness.svg'
          className='category-icon fitness-icon'
        />
      <a className='icon-link'>Fitness</a>
      </div>
      <div className='icon-links-wrapper'>
        <ReactSVG
          path='../../assets/images/catering.svg'
          className='category-icon catering-icon'
        />
        <a className='icon-link'>Catering</a>
      </div>
      <div className='icon-links-wrapper'>
        <ReactSVG
          path='../../assets/images/furniture.svg'
          className='category-icon furniture-icon'
        />
        <a className='icon-link'>Furniture</a>
      </div>
      <div className='icon-links-wrapper'>
        <ReactSVG
          path='../../assets/images/flower.svg'
          className='category-icon flower-icon'
        />
        <a className='icon-link'>Florist</a>
      </div>
      <div className='icon-links-wrapper'>
        <ReactSVG
          path='../../assets/images/landscape.svg'
          className='category-icon landscape-icon'
        />
        <a className='icon-link'>Landscaping</a>
      </div>
      <div className='icon-links-wrapper'>
        <ReactSVG
          path='../../assets/images/repair.svg'
          className='category-icon repair-icon'
        />
        <a className='icon-link'>Repair</a>
      </div>
    </div>
  </div>
);

export default CategoryIconIndex;
