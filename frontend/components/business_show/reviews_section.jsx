import React from 'react';

const ReviewsSection = props => {
  const { business } = props;
  return (
    <div className='reviews-section business-section'>
      <h3 className='business-section-header'>Reviews</h3>
      <span className='display'>
        This business doesn't have any reviews yet.
      </span>
    </div>
  );
};

export default ReviewsSection;
