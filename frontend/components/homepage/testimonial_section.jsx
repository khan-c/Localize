import React from 'react';
import Testimonial from './testimonial';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

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
      url: '/business/choux-san-francisco/',
      testimonial: 'We worked with Google and they got us off the ground! Thank you Localize for helping us get noticed. Couldn\'t have done it without you!'
    };

    const business1 = {
      name: 'Choux',
      image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/bs-rDwRRXYAOuuISurFLzA/o.jpg',
      url: '/business/choux-san-francisco/',
      testimonial: 'EventBrite messaged us through Localize inquiring about a few orders. We ended up commissioned to provide baked goods one whole event, an amount we would normally do in three weeks!'
    };

    const business2 = {
      name: 'Zozi\'s Loft',
      image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/ovM_8uop_i0ZpyBJAGCzKQ/o.jpg',
      url: '/business/zozis-loft-san-francisco/',
      testimonial: 'Triton Luxury Apartments just signed a contract with us to provide staging furniture the new building on 18th. Since then they\'ve opened up several other complexes and hired us to stage those as well! Thanks Localize!'
    };
    const business3 = {
      name: 'SF Design Build',
      image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/-AR0hlPzNWyiTeav0zwjng/o.jpg",
      url: '/business/sf-design-build-san-francisco-3/',
      testimonial: 'MailChimp had some floor damage and needed someone to come in quick to do the repair. We worked so well together they keep coming back to us for more work! We could\'t have done it without Localize!'
    };
    const business4 = {
      name: 'Laundry Locker',
      image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/2eDNDSBmmKAQXaiVaGhUig/o.jpg",
      url: '/business/laundry-locker-san-francisco-26/',
      testimonial: 'We are now the sole on site laundry service for a local startup! Businsess has increased dramatically without foot-traffic to our door. We could\'t have done it without Localize!'
    };
    const business5 = {
      name: 'Social Print Studio',
      image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/l7bARapSDgdptFQ8OqHgtw/o.jpg",
      url: '/business/social-print-studio-san-francisco/',
      testimonial: 'Salesforce was looking for a creative way gift to show employee appreciation. We worked with them to provide custom-printed calendars and wood panels printed with employee-taken photographs! It was all thanks to Localize!'
    };
    const business6 = {
      name: 'Pop & Tar Floral Couture',
      image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/yopHIKqX6K_mk6ix812Wfg/o.jpg",
      url: '/business/pop-and-tar-floral-couture-san-francisco/',
      testimonial: 'Localize is amazing! We worked with Mint.com to become their sole floral provider for the next year! '
    };
    const business7 = {
      name: 'San Francisco Green Clean',
      image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/TjP8EuY2nJlRnNXegHNRzg/o.jpg",
      url: '/business/san-francisco-green-clean-san-francisco-2/',
      testimonial: 'Initially, Zendesk asked us to clean their conference center after a big event. They were so happy with us, we signed a contract to be their primary cleaning company! Localize works! '
    };

    return (
      <div className='testimonial-section'>
        <h2 className='testimonials-header'>
          Testimonials
        </h2>
        <div className='testimonials-wrapper'>
          <Testimonial business={business1}/>
          <Testimonial business={business5}/>
          <Testimonial business={business2}/>
          <Testimonial business={business3}/>
          <Testimonial business={business4}/>
          <Testimonial business={business6}/>
          <Testimonial business={business7}/>
          <Testimonial business={business}/>
        </div>
      </div>

    );
  }
}

export default TestimonialSection;
