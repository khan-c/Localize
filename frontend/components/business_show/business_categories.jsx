import React from 'react';
import { withRouter } from 'react-router-dom';
import { stateToUrl, locationFromPath } from '../../util/parsing_functions';

class BusinessCategories extends React.Component {
  sendToCategorySearchPage(event, term) {
    event.preventDefault();
    const query = {
      text: term,
      location: 'San Francisco'
    };
    const url = `/search?${stateToUrl(query)}`;
    this.props.history.push(url);
  }

  render() {
    if (!this.props.categories) {
      return null;
    } else {
      return (
        <div className='business-categories'>
          { this.props.categories.map((category, i) => (
            <h4
              key={i}
              className='business-category'
              onClick={(e) => this.sendToCategorySearchPage(e, category)}
            >
              {category}
            </h4>
          ))}
        </div>
      );
    }
  }
}

export default withRouter(BusinessCategories);
