import React from 'react';

class SearchBarInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      query: '',
      location: ''
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render () {
    return (
      <div className='search-input-wrapper'>
        <img
          src='../../assets/images/magnifier.svg'
          className='mag-icon'
        />
        <input type='text'
          placeholder='search'
          className='search-bar-input'
          value={this.state.query}
          onChange={this.update('query')}
        />
        <img
          src='../../assets/images/pin.svg'
          className='pin-icon'
        />
        <input type='text'
          placeholder='location'
          className='search-bar-input'
          value={this.state.location}
          onChange={this.update('location')}
        />
      </div>
    );
  }
}

export default SearchBarInput;
