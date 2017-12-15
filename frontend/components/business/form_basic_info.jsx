import React from 'react';
import Select from 'react-select';
import FormServices from './form_services';

class BusinessFormBasic extends React.Component {
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
    const states = [
      { value: "AK", label: "AK" },
      { value: "AL", label: "AL" },
      { value: "AR", label: "AR" },
      { value: "AZ", label: "AZ" },
      { value: "CA", label: "CA" },
      { value: "CO", label: "CO" },
      { value: "CT", label: "CT" },
      { value: "DC", label: "DC" },
      { value: "DE", label: "DE" },
      { value: "FL", label: "FL" },
      { value: "GA", label: "GA" },
      { value: "HI", label: "HI" },
      { value: "IA", label: "IA" },
      { value: "ID", label: "ID" },
      { value: "IL", label: "IL" },
      { value: "IN", label: "IN" },
      { value: "KS", label: "KS" },
      { value: "KY", label: "KY" },
      { value: "LA", label: "LA" },
      { value: "MA", label: "MA" },
      { value: "MD", label: "MD" },
      { value: "ME", label: "ME" },
      { value: "MI", label: "MI" },
      { value: "MN", label: "MN" },
      { value: "MO", label: "MO" },
      { value: "MS", label: "MS" },
      { value: "MT", label: "MT" },
      { value: "NC", label: "NC" },
      { value: "ND", label: "ND" },
      { value: "NE", label: "NE" },
      { value: "NH", label: "NH" },
      { value: "NJ", label: "NJ" },
      { value: "NM", label: "NM" },
      { value: "NV", label: "NV" },
      { value: "NY", label: "NY" },
      { value: "OH", label: "OH" },
      { value: "OK", label: "OK" },
      { value: "OR", label: "OR" },
      { value: "PA", label: "PA" },
      { value: "RI", label: "RI" },
      { value: "SC", label: "SC" },
      { value: "SD", label: "SD" },
      { value: "TN", label: "TN" },
      { value: "TX", label: "TX" },
      { value: "UT", label: "UT" },
      { value: "VA", label: "VA" },
      { value: "VT", label: "VT" },
      { value: "WA", label: "WA" },
      { value: "WI", label: "WI" },
      { value: "WV", label: "WV" },
      { value: "WY", label: "WY" }
    ];
      const stateOptions = states.map(state => (
        <option key={ state } value={ state }>{ state }</option>
      ));
    return (
      <div>
        <form className="business-form">
          <input
            onChange={ this.handleChange('name') }
            type="text"
            placeholder="Company Name"
            value={ this.state.name }
            autoFocus
            />
          <input
            onChange={ this.handleChange('address1') }
            type="text"
            placeholder="Street Address 1"
            value={ this.state.address1 }
            />
          <input
            onChange={ this.handleChange('address2') }
            type="text"
            placeholder="Street Address 2 (optional)"
            value={ this.state.address2 }
            />
          <div className="form-address">
            <input
              className="city"
              onChange={ this.handleChange('city') }
              type="text"
              placeholder="City"
              value={ this.state.city }
              />
            <Select
              name="select-state"
              noResultsText="no state found"
              placeholder="STATE"
              value={ this.state.state }
              autosize={ false }
              clearable={ false }
              onChange={ this.handleChange("state") }
              searchable
              options={ states }
              />
            <input
              className="zip"
              onChange={ this.handleChange('zip') }
              type="text"
              placeholder="Zip"
              value={ this.state.zip }
              />
          </div>
          <input
            onChange={ this.handleChange('phone') }
            type="text"
            placeholder="Phone"
            value={ this.state.phone }
            />
        </form>
        <h3 className="business-form-title">Services / Products</h3>
        <FormServices />
      </div>
    );
  }
}

export default BusinessFormBasic;
