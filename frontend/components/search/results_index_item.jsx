import React from 'react';
import ReactSVG from 'react-svg';
import { withRouter } from 'react-router-dom';
import { link } from 'react-router-dom';
import { stateToUrl, locationFromPath } from '../../util/parsing_functions';

class ResultsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.sendToBusinessPage = this.sendToBusinessPage.bind(this);
    this.clearMapHover = this.clearMapHover.bind(this);
  }

  clearMapHover() {
    let elementToRemove = document.getElementsByClassName("map-hover");
    //removes it if it exists (we only want one)
    if (elementToRemove.length > 0 ){
      elementToRemove[0].classList.remove("map-hover");
    }
  }

  sendToBusinessPage(event, businessId) {
    event.preventDefault();
    this.props.clearAutocompleteFields();
    const url = `/business/${businessId}`;
    this.props.history.push(url);

  }

  sendToCategorySearchPage(event, term) {
    const path = this.props.location.search;
    event.preventDefault();
    const query = {
      text: term,
      location: locationFromPath(path)
    };
    const url = `/search?${stateToUrl(query)}`;
    this.props.history.push(url);
    this.props.autocompleteFields(query);
  }

  render(){
    const { business } = this.props;
    if (!business){
      return null;
    }
    return(
      <li className='results-index-item' id={business.id}>
        <img
          className='results-index-thumbnail'
          src={business.image_url}
          onClick={(e) => this.sendToBusinessPage(e, business.id)}
          onMouseOver={this.clearMapHover}
        />
        <div className='results-index-item-text'>
          <div className='result-index-item-text-wrapper'
            onMouseOver={this.clearMapHover}
          >
            <a
              onClick={(e) => this.sendToBusinessPage(e, business.id)}
              className='result-idx-item-business-name'
              onMouseOver={this.clearMapHover}
            >
              {business.name}
            </a>
            <div className='contact-info-wrapper first-info-wrapper'>
              <ReactSVG
                path='../../assets/images/pin.svg'
                className='results-index-item-icon'
                onMouseOver={this.clearMapHover}
              />
              <span className='business-address display'>
                {`${business.location.display_address[0]}, ${business.location.display_address[1]}`}
              </span>
            </div>
            <div className='contact-info-wrapper'>
              <ReactSVG
                path='../../assets/images/telephone.svg'
                className='results-index-item-icon'
                onMouseOver={this.clearMapHover}
              />
              <span className='display'>{business.display_phone}</span>
            </div>
          </div>
          <div className='category-contact-wrapper'>
            <div className='category-contact'>
              <div className='results-index-categories-wrapper'>
                {business.categories.map((category,idx) => (
                  <input
                    type='button'
                    className='results-index-item-category'
                    value={category['title']}
                    key={category['title']+idx}
                    onClick={(e) => this.sendToCategorySearchPage(e, category['title'])}
                  />
                ))}
              </div>

              <input type='submit' className='contact-button' value='Contact'/>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(ResultsIndexItem);
