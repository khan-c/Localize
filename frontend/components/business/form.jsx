import React from 'react';
import { NavLink } from 'react-router-dom';
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
          <h3>Your Business</h3>
          <BusinessFormBasic />
        </div>
      </div>
    );
  }
}

export default BusinessForm;
