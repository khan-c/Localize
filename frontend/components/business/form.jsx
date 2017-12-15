import React from 'react';
import { NavLink, Route, Link } from 'react-router-dom';
import Select from 'react-select';
import BusinessFormBasic from './form_basic_info';

class BusinessForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let bizLink = '/';
    if (this.props.location.pathname === '/associatebusiness/basic_info') {
      bizLink='/associatebusiness/add_details';
    }
    return (
      <div className="business-modal">
        <div className="business-page">
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
              <Link className="biz-form-button" to={ bizLink }>
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessForm;
