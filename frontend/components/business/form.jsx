import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Select from 'react-select';
import BusinessFormBasic from './form_basic_info';

class BusinessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    };
  }

  handleChange(type) {
    if (type === 'state') {
      return (input) => {
        this.setState({ [type]: input });
      };
    }
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  render() {
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
              CONTINUE BUTTON
              FAQ DROPDOWN?
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessForm;
