import React from 'react';
import Testimonial from './testimonial';
import Slider from 'react-slick';

class TestimonialSection extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  sendToBusinessPage(event, businessId) {
    event.preventDefault();
    this.props.clearAutocompleteFields();
    const url = `/business/${businessId}`;
    this.props.history.push(url);
  }

  render () {
    const business = {
      name: 'Flower Shop',
      image_url: 'https://i.pinimg.com/564x/80/46/b7/8046b7677089f90ccebe9d896fbd22c9.jpg',
      url: 'https://farmgirlflowers.com/',
      testimonial: 'We worked with Google and they got us off the ground! Thank you Localize for helping us get noticed. Couldn\'t have done it without you!'
    };

    const business1 = {
      name: 'SF Party',
      image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/kqgQOmDbAot5oQBVL8yKFA/o.jpg',
      url: 'https://farmgirlflowers.com/',
      testimonial: 'EventBrite messaged us through Localize inquiring about costumes for a party they had. We ended up commissioned to throw the whole event with costumes, decorations, and equipment rentals. We created a new partnership for future parties thanks to Localize.'
    };

    const business2 = {
      name: 'Vital House Cleaning',
      image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/8S2SwSYGOlbquN9UkNNpUg/o.jpg',
      url: 'http://localhost:8000/#/business/vital-house-cleaning-san-francisco',
      testimonial: 'Triton Luxury Apartments just signed a contract with us to provide cleaning services the new building on 18th. This is the largest contract we have ever received! Thanks Localize!'
    };
    const business3 = {
      name: 'El Farolito',
      image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/OPnKCvgBR2-lQ1-yahrpiA/o.jpg",
      url: 'http://localhost:8000/#/business/el-farolito-san-francisco-2',
      testimonial: 'MailChimp and us worked out a out a deal where we give their employees a discount and we are contracted to cater for them twice a month. We could\'t have done it without Localize!'
    };
    const business4 = {
      name: 'Image Printing',
      image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/JkKPxxUV2ZadkDnMj5v27g/o.jpg",
      url: 'http://www.imageprinting.us/',
      testimonial: 'We are now the sole printer facility for a local startup! Businsess has increased dramatically without foot-traffic to our door. We could\'t have done it without Localize!'
    };

    return (
      <div className='testimonial-section'>
        <h2 className='testimonials-header'>
          Testimonials
        </h2>
        <div className='testimonials-wrapper'>
          <Testimonial business={business1}/>
          <Testimonial business={business2}/>
          <Testimonial business={business3}/>
          <Testimonial business={business4}/>
          <Testimonial business={business}/>
        </div>
      </div>

    );
  }
}

export default TestimonialSection;
