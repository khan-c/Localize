import React from 'react';
import { NavLink, Route, Link } from 'react-router-dom';
import Select from 'react-select';
import BusinessFormBasic from './form_basic_info';
import MdClose from 'react-icons/lib/md/close';

class BusinessForm extends React.Component {
  constructor(props) {
    super(props);

    this.bizModalClose = this.bizModalClose.bind(this);
  }

  bizModalClose(e) {
    if (e.target.className === 'business-modal') {
      this.props.history.push("/");
    }
  }

  render() {
    let bizLink = '/';
    let header = 'Your Business';
    const path = this.props.location.pathname;
    if (path === '/associatebusiness/basic_info') {
      bizLink = '/associatebusiness/add_details';
    } else if (path === '/associatebusiness/add_details') {
      header = 'Details';
      bizLink = '/associatebusiness/photos';
    } else if (path === '/associatebusiness/photos') {
      header = 'Add Photos';
    }
    return (
      <div onClick={ this.bizModalClose } className="business-modal">
        <div className="business-page">
          <Link className="form-close" to="/"><MdClose /></Link>
          <div className="business-form-header">
            <div className="business-form-links">
              <NavLink
                to="/associatebusiness/basic_info"
                activeClassName="selected">
                Basic Info
              </NavLink>
              <NavLink
                to="/associatebusiness/add_details"
                activeClassName="selected">
                Details
              </NavLink>
              <NavLink
                to="/associatebusiness/photos"
                activeClassName="selected">
                Photos
              </NavLink>
            </div>
            <h3 className="business-form-title">{ header }</h3>
          </div>
          <div className="business-form-body">
            <div className="business-form-forms">
              <Route path="/associatebusiness/basic_info"
                component={BusinessFormBasic} />
            </div>
            <div className="business-form-faq">
              <div className="faq">
                <h4>FAQ</h4>
                <span>Please provide contact information so big companies can find you!</span>
              </div>
              <div className="faq">
                <h4>FAQ</h4>
                <span>Type your provided services or products to let users know what you can do!</span>
              </div>
            </div>
          </div>
          <div className="biz-form-buttons">
            <Link className="biz-form-cancel" to="/">
              cancel
            </Link>
            <Link className="biz-form-button" to="/test">
              Save and exit
            </Link>
            <Link className="biz-form-button" to={ bizLink }>
              Continue
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessForm;
