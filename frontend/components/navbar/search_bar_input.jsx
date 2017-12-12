import React from 'react';

const style = {
  wrapper: {
    display: 'flex',
    width: '500px',
    height: '40px',
    alignItems: 'center',
    padding: '10px',
    boxSizing: 'border-box'
  },
  input: {
    borderBottom: '1px solid',
    // left: '40px',
  },
  magIcon: {
    height: '15px',
    width: '15px',
    marginRight: '10px',
  },
  pinIcon: {
    height: '18px',
    width: '18px',
    margin: '0 10px'
  }
};

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
      <div style={style.wrapper}>
        <img
          src="../../assets/images/magnifier.svg"
          style={style.magIcon}
        />
        <input type="text"
          placeholder="search"
          style={style.input}
          value={this.state.query}
          onChange={this.update('query')}
        />
        <img
          src="../../assets/images/pin.svg"
          style={style.pinIcon}
        />
        <input type="text"
          placeholder="location"
          style={style.input}
          value={this.state.location}
          onChange={this.update('location')}
        />
      </div>
    );
  }
}

export default SearchBarInput;
