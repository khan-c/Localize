import React from 'react';
import ReactSVG from 'react-svg';

class LandingSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      location: ''
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    }, () => {
      if ( !this.state.text) {
        this.props.clearAutocomplete();
      } else if (this.state.text.length >= 3) {
        const query = {
          text: this.state.text,
          location: this.state.location
        };
        console.log(query);
        this.props.getAutoComplete(query);
      }
    });
  }

  render() {
    console.log(this.props);
    return(
      <div className='landing-search-wrapper'>
        <div className='landing-search-wrapper-div'>
          <div className='landing-search-input-wrapper'>
            <ReactSVG
              path='../../assets/images/magnifier.svg'
              className='landing-mag-icon'
            />
            <input
              type='text'
              className='landing-input search-term'
              placeholder='search'
              value={this.state.text}
              onChange={this.update('text')}
            />
        </div>
          <div className='landing-search-input-wrapper'>
            <ReactSVG
              path='../../assets/images/pin.svg'
              className='landing-pin-icon'
            />
            <input
              type='text'
              className='landing-input search-location'
              placeholder='location'
              value={this.state.location}
              onChange={this.update('location')}
            />
          </div>
          <input
            type='submit'
            className='landing-search-button'
            value='search'
          />
        </div>
      </div>
    );
  }
}

export default LandingSearch;
