import React from 'react';

const BusinessCategories = props => (
 <div className='business-categories'>
   { props.categories.map((category, i) => (
     <h4 key={i} className='business-category'>{category}</h4>
   ))}
 </div>
);

export default BusinessCategories;
