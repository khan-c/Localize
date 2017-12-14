import React from 'react';
import ReactSVG from 'react-svg';
import LandingAutocompleteIndexContainer from './landing_autocomplete_index_container';

class LandingSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      location: ''
    };
    this.clearResults = this.clearResults.bind(this);
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
        this.props.getAutoComplete(query);
      }
    });
  }

  clearResults() {
    setTimeout( () => {
      this.props.clearAutocomplete();
      this.setState({query: ''});
    }, 100);
  }

  render() {
    return(
      <div className='landing-search-wrapper'>
        <div className='landing-search-wrapper-div'>
          <div className='landing-search-input-wrapper relative'>
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
              onBlur={this.clearResults}
            />
            <LandingAutocompleteIndexContainer />
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
