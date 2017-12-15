import React from 'react';
import Select from 'react-select';
import { fetchAutoComplete } from '../../util/yelp_api';

class FormServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    };

    this.onChange = this.onChange.bind(this);
    this.getServices = this.getServices.bind(this);
  }

  onChange(value) {
    this.setState({ value: value });
  }

  getServices(input) {
    if (!input) {
      return Promise.resolve({ options: [] });
    }
    const query = {
      text: input
    };
    return fetchAutoComplete(query)
      .then(response => {
        const results = [];
        response.data.data.terms.forEach(el => {
          const result = {};
          result.value = el.text;
          result.label = el.text;
          results.push(result);
        });
        return { options: results };
      }
    );
  }

  render() {
    console.log(this.state.value);
    const Services = Select.Async;
    return(
      <div>
        <Services
          multi
          value={ this.state.value }
          onChange={ this.onChange }
          loadOptions={ this.getServices }
          backspaceRemoves
        />
      </div>
    );
  }
}

export default FormServices;
