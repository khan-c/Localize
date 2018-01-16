import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      subject: '',
      body: '',
    };
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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
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
        <input type='text'
          placeholder='Email'
          onChange={this.update('email')}
          className='white-input connect-input'
        />
        <input type='text'
          placeholder='Subject'
          onChange={this.update('subject')}
          className='white-input connect-input'
        />
        <textarea
          className='connect-body'
          placeholder='Go ahead, ask away!'
        />
        <input type='submit'
          value="Send"
          className="connect-button"
        />
      </div>
    );
  }
}

export default ContactForm;
