import React from 'react';
import BusinessCategories from './business_categories';
import BusinessPhotosCarouselContainer from './business_photos_carousel_container';
import { grabTitles } from '../../util/selectors';

const GeneralInfo = props => {
  const { business } = props;
  return (
    <div className='business-section-wrapper'>
      {console.log(business)}
      <h1 className='business-name'>{business.name}</h1>
      <span className='display-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Proin in elit erat. Vestibulum et enim bibendum, molestie ex non,
        ullamcorper sapien. Curabitur eu metus mi. Maecenas ac sapien
        suscipit, aliquam tortor lacinia, pretium mauris. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Proin in elit erat.
        Vestibulum et enim bibendum, molestie ex non.
      </span>
      <BusinessCategories categories={grabTitles(business.categories)}/>
      <BusinessPhotosCarouselContainer />
    </div>
  );
};

export default GeneralInfo;
