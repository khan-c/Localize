import React from 'react';
import BusinessCategories from './business_categories';
import BusinessPhotosCarouselContainer from './business_photos_carousel_container';
import { grabTitles } from '../../util/selectors';

const GeneralInfo = props => {
  const { business } = props;

  let info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
  "Proin in elit erat. Vestibulum et enim bibendum, molestie ex non, " +
  "ullamcorper sapien. Curabitur eu metus mi. Maecenas ac sapien suscipit, " +
  "aliquam tortor lacinia, pretium mauris. Lorem ipsum dolor sit amet, " +
  "consectetur adipiscing elit. Proin in elit erat. " +
  "Vestibulum et enim bibendum, molestie ex non.";
  if (business.about) {
    info = business.about;
  }
  return (
    <div className='business-section-wrapper'>
      <h1 className='business-name'>{business.name}</h1>
      <span className='display-text'>
        {info}
      </span>
      <BusinessCategories categories={grabTitles(business.categories)}/>
      <BusinessPhotosCarouselContainer />
    </div>
  );
};

export default GeneralInfo;
