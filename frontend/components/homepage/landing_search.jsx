import React from 'react';
import ReactSVG from 'react-svg';
import LandingAutocompleteIndexContainer from './landing_autocomplete_index_container';
import { stateToUrl } from '../../util/parsing_functions';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

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
    this.handleKey = this.handleKey.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.autocompleteValues.term &&
      this.props.autocompleteValues.term !== nextProps.autocompleteValues.term
    ) {
      this.setState({
        text: nextProps.autocompleteValues.term,
      });
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
      [`${field}QueryIsActive`]: true,
    }, () => {
      if ( !this.state.text) {
        this.props.clearAutocomplete();
      } else if (this.state.text.length >= 3 && field === 'text') {
        const query = {
          text: this.state.text,
          location: this.state.location,
        };
        this.props.getAutoComplete(query);
      }
    });
  }


  handleSubmit(event) {
    const url = `/search?${stateToUrl(this.state)}`;
    if (event) {event.preventDefault();}
    if (this.state.text.length > 3) {
      this.props.history.push(url);
    }
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

  handleKey(e, field) {
    if (e.keyCode === 9 && field === 'text') {
      e.preventDefault();
      document.getElementById('search-location').focus();
    } else if (e.keyCode === 13 && this.state.text) {
      document.getElementById('search-button').focus();
      this.handleSubmit();
    }
  }

  render() {
    return(
      <div className='landing-search-wrapper' id='landing-search-wrapper'>
        <div className='landing-search-wrapper-div'>
          <div className='landing-inputs-wrapper'>
            <div className='landing-search-input-wrapper relative' id='search-input'>
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
                onKeyDown={e => this.handleKey(e, 'text')}
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
                className='landing-input'
                id='search-location'
                placeholder='location'
                value={this.state.location}
                onChange={this.update('location')}
                onKeyDown={e => this.handleKey(e, 'location')}
                onBlur={() => this.makeInactive('location')}
              />
            </div>
          </div>
          <input
            type='submit'
            className='landing-search-button'
            value='search'
            id='search-button'
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(LandingSearch);
