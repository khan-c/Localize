import React from 'react';

const Testimonial = (props) => {
  const { business } = props;
  const style = {
    backgroundImage: `url(${business.image_url})`
  };
  return (
    <div className='testimonial'>
      <img src={business.image_url} className='testimonial-image'/>
      <div className='testimonial-text-wrapper'>
        <h4 className='testimonial-bname'>{business.name}</h4>
        <span className='testimonial-text'>{business.testimonial}</span>
      </div>
    </div>
  );
};

export default Testimonial;
