import React from 'react';
import GeneralInfo from './general_info';
import ContactInfoSection from './contact_info_section';
import ReviewsSection from './reviews_section';

const BusinessAboutSection = props => {
  if (props.singleBusinessLoading) {
    return (<div></div>);
  } else {
    console.log(props.business);
    return (
      <div className='business-about-section'>
        <GeneralInfo business={props.business}/>
        <ContactInfoSection business={props.business}/>
        <ReviewsSection business={props.business} />
      </div>
    );
  }

};

export default BusinessAboutSection;
