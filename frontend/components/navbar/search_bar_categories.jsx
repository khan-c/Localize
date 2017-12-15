import React from 'react';
import ReactSVG from 'react-svg';
import Icon from 'react-icons/lib/fa/angle-right';
import Slider from 'react-slick';

class Categories extends React.Component {
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

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      centerMode: true,
      adaptiveHeight: true,
      arrows: false,
    };
    return (
      <div className='search-categories-wrapper'>
        <Icon className='search-arrow h-flip' onClick={this.previous}/>
        <Slider {...settings} ref={c => this.slider = c} className='search-categories-ul'>
          <div key={1}><a>category</a></div>
          <div key={2}><a>category</a></div>
          <div key={3}><a>category</a></div>
          <div key={4}><a>category</a></div>
          <div key={5}><a>category</a></div>
          <div key={6}><a>category</a></div>
          <div key={7}><a>category</a></div>
          <div key={8}><a>category</a></div>
          <div key={9}><a>category</a></div>
          <div key={10}><a>category</a></div>
          <div key={12}><a>category</a></div>
          <div key={13}><a>category</a></div>
        </Slider>
        <Icon className='search-arrow' onClick={this.next}/>
      </div>
    );
  }
}

export default Categories;
