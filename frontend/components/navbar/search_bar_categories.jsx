import React from 'react';
import ReactSVG from 'react-svg';
import Icon from 'react-icons/lib/fa/angle-right';
import Slider from 'react-slick';
import { withRouter } from 'react-router-dom';
import { stateToUrl } from '../../util/parsing_functions';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, term) {
    event.preventDefault();
    const query = {
      text: term,
      location: 'San Francisco'
    };
    const url = `/search?${stateToUrl(query)}`;
    this.props.history.push(url);
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
      variableWidth: true,
    };
    return (
      <div className='search-categories-wrapper'>
        <Icon className='search-arrow h-flip' onClick={this.previous}/>
        <Slider {...settings} ref={c => this.slider = c} className='search-categories-ul'>
          <div className='category-carousel' key={1}><a onClick={(e) => this.handleClick(e, 'Catering')}>Catering</a></div>
          <div className='category-carousel' key={2}><a onClick={(e) => this.handleClick(e, 'Delivery')}>Delivery</a></div>
          <div className='category-carousel' key={3}><a onClick={(e) => this.handleClick(e, 'Design')}>Design</a></div>
          <div className='category-carousel' key={4}><a onClick={(e) => this.handleClick(e, 'Cleaning')}>Cleaning</a></div>
          <div className='category-carousel' key={5}><a onClick={(e) => this.handleClick(e, 'Supplies')}>Supplies</a></div>
          <div className='category-carousel' key={6}><a onClick={(e) => this.handleClick(e, 'Florist')}>Florist</a></div>
          <div className='category-carousel' key={7}><a onClick={(e) => this.handleClick(e, 'Installataion')}>Installation</a></div>
          <div className='category-carousel' key={8}><a onClick={(e) => this.handleClick(e, 'Furniture')}>Furniture</a></div>
          <div className='category-carousel' key={9}><a onClick={(e) => this.handleClick(e, 'Construction')}>Construction</a></div>
          <div className='category-carousel' key={10}><a onClick={(e) => this.handleClick(e, 'Maintenance')}>Maintenance</a></div>
          <div className='category-carousel' key={12}><a onClick={(e) => this.handleClick(e, 'Printing')}>Printing</a></div>
          <div className='category-carousel' key={13}><a onClick={(e) => this.handleClick(e, 'Accounting')}>Accounting</a></div>
        </Slider>
        <Icon className='search-arrow' onClick={this.next}/>
      </div>
    );
  }
}

export default withRouter(Categories);
