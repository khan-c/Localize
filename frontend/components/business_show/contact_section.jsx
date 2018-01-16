import React from 'react';
import ContactForm from './contact_form';

const ContactSection = props => {
  if (props.singleBusinessLoading) {
    return null;
  } else {
    return(
      <div className='contact-section'>
        <ContactForm business={props.business}/>
      </div>
    );
  }
};

export default ContactSection;
