import React from 'react';
import ReactSVG from 'react-svg';
import { stateToUrl } from '../../util/parsing_functions';
import { withRouter } from 'react-router-dom';

class CategoryIconIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, term) {
    event.preventDefault();
    const query = {
      text: term,
      location: 'San Francisco'
    };
    const url = `/search?${stateToUrl(query)}`;
    setTimeout(() => this.props.history.push(url), 600);
  }

  render() {
    return (
      <div className='category-icon-index'>
        <h1>Mission</h1>
        <span className='category-icon-text display-text'>
          Our goal is to provide a simple way for large businesses
          to include their community when sourcing for products
          and services. <cite>Localize</cite> is here to make it easy for
          these large companies to discover local businesses.
          Our site is also a resource for local businesses owners to learn
          about what larger companies are looking for and to provide local
          business owners with an opportunity to propser.
          Our world is growing, and while our cities will always embrace the
          emergence of new and exciting businesses, we don't want the influx
          to also mean the phasing out of established, smaller businesses.
          We realize that resisting the negative impacts of gentrification
          is a layered issue, and we hope to empower our local community with
          a means of adapting to the coming change and dictating how that
          change takes place.
        </span>
        <div className='icons'>
          <div
            className='icon-links-wrapper'
            onClick={(e) => this.handleClick(e, 'Art')}>
            <ReactSVG
              path='../../assets/images/art.svg'
              className='category-icon art-icon'
            />
            <a className='icon-link'>Art</a>
          </div>
          <div
            className='icon-links-wrapper'
            onClick={(e) => this.handleClick(e, 'Fitness')}>
            <ReactSVG
              path='../../assets/images/fitness.svg'
              className='category-icon fitness-icon'
            />
            <a className='icon-link'>Fitness</a>
          </div>
          <div
            className='icon-links-wrapper'
            onClick={(e) => this.handleClick(e, 'Catering')}>
            <ReactSVG
              path='../../assets/images/catering.svg'
              className='category-icon catering-icon'
            />
            <a className='icon-link'>Catering</a>
          </div>
          <div
            className='icon-links-wrapper'
            onClick={(e) => this.handleClick(e, 'Furniture')}>
            <ReactSVG
              path='../../assets/images/furniture.svg'
              className='category-icon furniture-icon'
            />
            <a className='icon-link'>Furniture</a>
          </div>
          <div
            className='icon-links-wrapper'
            onClick={(e) => this.handleClick(e, 'Florist')}>
            <ReactSVG
              path='../../assets/images/flower.svg'
              className='category-icon flower-icon'
            />
            <a className='icon-link'>Florist</a>
          </div>
          <div
            className='icon-links-wrapper'
            onClick={(e) => this.handleClick(e, 'Landscaping')}>
            <ReactSVG
              path='../../assets/images/landscape.svg'
              className='category-icon landscape-icon'
            />
            <a className='icon-link'>Landscaping</a>
          </div>
          <div
            className='icon-links-wrapper'
            onClick={(e) => this.handleClick(e, 'Repair')}>
            <ReactSVG
              path='../../assets/images/repair.svg'
              className='category-icon repair-icon'
            />
            <a className='icon-link'>Repair</a>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(CategoryIconIndex);
