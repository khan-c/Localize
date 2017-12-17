import React from 'react';
import ReactSVG from 'react-svg';

const ContactInfoSection = props => {
  const { business } = props;
  return (
    <div className='contact-info-section business-section'>
      <h3 className='business-section-header'>Contact</h3>
      <div className='contact-info-wrapper'>
        <ReactSVG
          path='../../assets/images/telephone.svg'
          className='contact-section-icon'
        />
        <span className='display'>{business.display_phone}</span>
      </div>
      <div className='contact-info-wrapper'>
        <ReactSVG
          path='../../assets/images/pin.svg'
          className='contact-section-icon'
        />
        <div className='address-wrapper'>
          <span className='display'>{business.location.display_address[0]}</span>
          <span className='display'>{business.location.display_address[1]}</span>
        </div>
      </div>
      <div className='contact-info-wrapper '>
        <ReactSVG
          path='../../assets/images/yelp.svg'
          className='yelp-icon'
        />
        <a href={business.url} target='_blank' className='website-url display'>https://www.yelp.com/biz/{business.id}</a>
      </div>
    </div>
  );
};

export default ContactInfoSection;
