import React from 'react';
import ContactForm from './contact_form';

const ContactSection = props => (
  <div className='contact-section'>
    <ContactForm business={props.business}/>
  </div>
);

export default ContactSection;
