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
    return (
      <div className='testimonial-section'>
        <h2 className='testimonials-header'>
          Testimonials
        </h2>
        <div className='testimonial-slider-wrapper'>
          <Icon className='testimonial-arrow previous h-flip' onClick={this.previous}/>
          <Slider {...settings} ref={c => this.slider = c} className='testimonial-slider'>
            <div className='testimonial-wrapper'>
              <Testimonial business={business}/>
            </div>
            <div className='testimonial-wrapper'>
              <Testimonial business={business}/>
            </div>
            <div className='testimonial-wrapper'>
              <Testimonial business={business}/>
            </div>
            <div className='testimonial-wrapper'>
              <Testimonial business={business}/>
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
