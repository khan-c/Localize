import React from 'react';
import { Link } from 'react-router-dom';

const LandingAutocompleteIndexItem = props => (
  <div
    className='landing-autocomplete-index-item'
    onClick={() => props.handleClick(props.term)}>
    <h4>{props.term}</h4>
  </div>
);

export default LandingAutocompleteIndexItem;
