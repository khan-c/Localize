import React from 'react';
import { Link } from 'react-router-dom';

const Testimonial = (props) => {
  const { business } = props;
  const style = {
    backgroundImage: `url(${business.image_url})`
  };
  return (
    <Link to={business.url}>
      <div className='testimonial'>
        <img src={business.image_url} className='testimonial-image'/>
        <div className='testimonial-text-wrapper'>
          <h4 className='testimonial-bname'>{business.name}</h4>
          <span className='testimonial-text'>{business.testimonial}</span>
        </div>
      </div>
    </Link>
  );
};

export default Testimonial;
