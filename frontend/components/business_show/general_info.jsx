import React from 'react';
import BusinessCategories from './business_categories';
import BusinessPhotosCarouselContainer from './business_photos_carousel_container';
import { grabTitles } from '../../util/selectors';

const GeneralInfo = props => {
  const { business } = props;

  let info = "This business is not registered with Localize.";
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
