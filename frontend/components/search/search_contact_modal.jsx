import React from 'react';
import ReactSVG from 'react-svg';
import { Link } from 'react-router-dom';

class SearchContactModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      body: '',
      bizEmail: 'cort_clearance_center@gmail.com'
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render () {
    const { business } = this.props;
    const businessUrl = `/business/${business.id}`;
    if (!business){
      return null;
    }
    return (
      <div>
        <div className='light-box' />
        <div className='contact-modal'>
          <h3>Connect with <strong className='red'><Link to={businessUrl} className='b-link'>{business.name}</Link></strong></h3>
          <div className='modal-content'>
            <div className='modal-contact-form'>
              <h4>Direct Message</h4>
              <input type='text'
                placeholder='Your Email'
                onChange={this.update('email')}
                className='white-input contact-modal-input'
              />
              <input type='text'
                placeholder='Subject'
                onChange={this.update('subject')}
                className='white-input contact-modal-input'
              />
              <textarea
                className='contact-body'
                placeholder='Go ahead, ask away!'
              />
              <input type='submit'
                value="Send"
                className="modal-contact-button"
              />
            </div>
            <div className='modal-contact-info'>
              <h4>More Ways to Connect</h4>
              <div className='modal-contact-li'>
                <ReactSVG
                  path='../../assets/images/telephone.svg'
                  className='results-index-item-icon'
                  onMouseOver={this.clearMapHover}
                />
                <span className='display'>{business.display_phone}</span>
              </div>
              <div className='modal-contact-li'>
                <ReactSVG
                  path='../../assets/images/pin.svg'
                  className='results-index-item-icon'
                  onMouseOver={this.clearMapHover}
                />
                <span>
                  { `${business.location.display_address[0]}` }
                  <br/>
                  { `${business.location.display_address[1]}` }
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchContactModal;
