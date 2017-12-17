import React from 'react';
import Icon from 'react-icons/lib/fa/chevron-right';
import Slider from 'react-slick';

class BusinessPhotosCarousel extends React.Component {
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
    const { business, singleBusinessLoading } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      // adaptiveHeight: true,
      arrows: true,
      className: 'slides',
    };
    if (singleBusinessLoading) {
      return (<div></div>);
    } else {
      return (
        <div className='business-photos-slider-wrapper'>
          <Icon className='business-photos-arrow previous h-flip' onClick={this.previous}/>
          <Slider {...settings} ref={c => this.slider = c} className='business-photos-slider'>
            {business.photos.map((photoUrl, i) => (
              <div key={i} className='business-photos-wrapper'>
                <img className='business-photo' src={photoUrl} />
              </div>
            ))}
          </Slider>
          <Icon className='business-photos-arrow next' onClick={this.next}/>
        </div>
      );
    }
  }
}

export default BusinessPhotosCarousel;
