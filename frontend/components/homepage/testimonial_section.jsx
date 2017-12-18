import React from 'react';
import Testimonial from './testimonial';
import Slider from 'react-slick';
import Icon from 'react-icons/lib/fa/chevron-right';

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

  render () {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      adaptiveHeight: true,
      arrows: true,
      className: 'slides',
    };
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
      url: 'https://www.sfparty.com/',
      testimonial: 'Triton Luxury Apartments just signed a contract with us to provide cleaning services the new building on 18th. This is the largest contract we have ever received! Thanks Localize!'
    };
    const business3 = {
      name: 'El Farolito',
      image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/OPnKCvgBR2-lQ1-yahrpiA/o.jpg",
      url: 'https://www.yelp.com/biz/el-farolito-san-francisco-2?osq=food+mission',
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
        <div className='testimonial-slider-wrapper'>
          <Icon className='testimonial-arrow previous h-flip' onClick={this.previous}/>
          <Slider {...settings} ref={c => this.slider = c} className='testimonial-slider'>
            <div className='testimonial-wrapper'>
              <Testimonial business={business1}/>
            </div>
            <div className='testimonial-wrapper'>
              <Testimonial business={business2}/>
            </div>
            <div className='testimonial-wrapper'>
              <Testimonial business={business3}/>
            </div>
            <div className='testimonial-wrapper'>
              <Testimonial business={business4}/>
            </div>
            <div className='testimonial-wrapper'>
              <Testimonial business={business}/>
            </div>
          </Slider>
          <Icon className='testimonial-arrow next' onClick={this.next}/>
        </div>
      </div>

    );
  }
}

export default TestimonialSection;
