import React from 'react';
import ReactSVG from 'react-svg';
import { withRouter } from 'react-router-dom';
import { link } from 'react-router-dom';

class ResultsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, businessId) {
    event.preventDefault();
    const url = `/business/${businessId}`;
    this.props.history.push(url);
  }

  render(){
    const { business } = this.props;
    if (!business){
      return null;
    }
    return(
      <li className='results-index-item'>
        <img className='results-index-thumbnail' src={business.image_url}/>
        <div className='results-index-item-text'>
          <div className='result-index-item-text-wrapper'>
            <a
              onClick={(e) => this.handleClick(e, business.id)}
              className='result-idx-item-business-name'
            >
              {business.name}
            </a>
            <div className='contact-info-wrapper'>
              <ReactSVG
                path='../../assets/images/pin.svg'
                className='results-index-item-icon'
              />
              <span className='business-address display'>
                {`${business.location.display_address[0]}, ${business.location.display_address[1]}`}
              </span>
            </div>
            <span className='display'>{business.display_phone}</span>
          </div>
          <div className='category-contact-wrapper'>

            <div className='category-contact'>
              <div>{business.categories[0]['title']}</div>
              <input type='submit' className='contact-button' value='Contact'/>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(ResultsIndexItem);
