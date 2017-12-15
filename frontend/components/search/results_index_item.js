import React from 'react'; 
import { link } from 'react-router-dom';

class ResultsIndexItem extends React.Component {

  render(){
    const { business } = this.props; 

    if (!business){
      return null; 
    }
    return(
      <li className="results-index-item"> 
        <img className="results-index-thumbnail" src={business.image_url}/>
        <div className="results-index-item-text">
          <h2 className="business-name">{business.name}</h2>
          <h4 className="business-address">
            {business.location.display_address[0] + business.location.display_address[1]}
          </h4>
          <h4>{business.display_phone}</h4>
          <div className="category-contact">
            <div>{business.categories[0]["title"]}</div>
            <div> </div>
            <input type="submit" className="contact-button" value="Contact"/>
          </div>
        </div>
      </li>
    ); 
  }
}

export default ResultsIndexItem; 

// business.display_phone
// business.location.display_address[0] + business.location.display_aaddress[1] 
// business.url 
// business.categories (array  of 2 objects, alias and title ) 
// business.transactions (array )


