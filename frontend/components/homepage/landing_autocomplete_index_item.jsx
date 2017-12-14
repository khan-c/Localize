import React from 'react';
import { Link } from 'react-router-dom';

const LandingAutocompleteIndexItem = props => (
  <Link to='/search' >
    <div className='landing-autocomplete-index-item'>
      <h4>{props.term}</h4>
    </div>
  </Link>
);

export default LandingAutocompleteIndexItem;
