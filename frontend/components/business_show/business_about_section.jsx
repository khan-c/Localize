import React from 'react';
import GeneralInfo from './general_info';

const BusinessAboutSection = props => {
  if (props.singleBusinessLoading) {
    return (<div></div>);
  } else {
    console.log(props.business);
    return (
      <div className='business-about-section'>
        <GeneralInfo business={props.business}/>
      </div>
    );
  }

};

export default BusinessAboutSection;
