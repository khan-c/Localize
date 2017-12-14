import React from 'react';
import ReactSVG from 'react-svg';
import LandingAutocompleteIndexContainer from './landing_autocomplete_index_container';

class LandingSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      location: '',
      textQueryIsActive: false,
      locationQueryIsActive: false
    };
    this.clearResults = this.clearResults.bind(this);
    this.changeFocusFrom = this.changeFocusFrom.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
      [`${field}QueryIsActive`]: true,
    }, () => {
      if ( !this.state.text) {
        this.props.clearAutocomplete();
        this.props.clearAutocompleteFields();
      } else if (this.state.text.length >= 3) {
        const query = {
          text: this.state.text,
          location: this.state.location
        };
        this.props.getAutoComplete(query);
        this.props.autocompleteFields(query);
      }
    });
  }

  makeInactive(field) {
    this.setState({
      [`${field}QueryIsActive`]: false,
    }, () => {
      const { textQueryIsActive, locationQueryIsActive } = this.state;
      if (!textQueryIsActive && !locationQueryIsActive) {
        this.clearResults();
      }
    });
  }

  clearResults() {
    setTimeout( () => {
      this.props.clearAutocomplete();
      this.setState({query: ''});
    }, 100);
  }

  changeFocusFrom(e, field) {
    if (e.keyCode === 9 && field === 'text') {
      e.preventDefault();
      document.getElementById('search-location').focus();
    }
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
              className='landing-input'
              id='search-term'
              placeholder='search'
              value={this.state.text}
              onChange={this.update('text')}
              onKeyDown={e => this.changeFocusFrom(e, 'text')}
              onBlur={() => this.makeInactive('text')}
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
              className='landing-input'
              id='search-location'
              placeholder='location'
              value={this.state.location}
              onChange={this.update('location')}
              onKeyDown={e => this.changeFocusFrom(e, 'location')}
              onBlur={() => this.makeInactive('location')}
            />
          </div>
          <input
            type='submit'
            className='landing-search-button'
            value='search'
            id='search-button'
          />
        </div>

      </div>
    );
  }
}

export default LandingSearch;
