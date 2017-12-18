import React from 'react';
import { stateToUrl } from '../../util/parsing_functions';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class SearchBarInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      query: '',
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
    if (!(this.state.location)){
      this.state.location = "San Francisco";
    }
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
    }, 400);
  }

  handleKey(e, field) {
    if (e.keyCode === 9 && field === 'text') {
      e.preventDefault();
      document.getElementById('navbar-search-location').focus();
    } else if (e.keyCode === 13 && this.state.text) {
      // document.getElementById('search-button-navbar').focus();
      this.handleSubmit();
    }
  }

  //original is below
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
          value={this.state.text}
          // onChange={this.update('query')}
          onChange={this.update('text')}
          onKeyDown={e => this.handleKey(e, 'text')}
          onBlur={this.clearResults}
        />


        <img
          src='../../assets/images/pin.svg'
          className='pin-icon'
        />
        <input type='text'
          placeholder='location'
          className='search-bar-location'
          id='navbar-search-location'
          value={this.state.location}
          onChange={this.update('location')}
          onKeyDown={e => this.handleKey(e, 'location')}
          onBlur={() => this.makeInactive('location')}
        />
      </div>

    );
  }
}

export default withRouter(SearchBarInput);
