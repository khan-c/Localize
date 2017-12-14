import React from 'react';

const Testimonial = (props) => {
  const { business } = props;
  const style = {
    backgroundImage: `url(${business.image_url})`
  };
  return (
    <div>
      <div className='testimonial' style={style}>
        <div className='testimonial-text-wrapper'>
          <h3 className='testimonial-bname'>{business.name}</h3>
          <span className='display-text'>{business.testimonial}</span>
        </div>
      </div>
      <div className='blank-div' />
    </div>
  );
};

export default Testimonial;
