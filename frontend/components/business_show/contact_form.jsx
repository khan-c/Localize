import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const businessShowContactForm = document.getElementById('business-show-contact-form');
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 65) {
        businessShowContactForm.classList.add('sticky');
      } else {
        businessShowContactForm.classList.remove('sticky');
      }
    });
  }

  render() {
    const { business } = this.props;
    return (
      <div
        className='business-show-contact-form contact-form'
        id='business-show-contact-form'
      >
        <h3>Connect</h3>
        <span>
          Direct connect is currently unavailable because this business hasn't registered with us yet.
        </span>
      </div>
    );
  }
}

export default ContactForm;
