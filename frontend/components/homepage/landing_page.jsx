import React from 'react';
import ReactSVG from 'react-svg';
import LandingIcons from './landing_icons';

class LandingPage extends React.Component {
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
      <div className='landing-page'>
        <div className='landing-page-content'>
          <LandingIcons />
          <h1>Connect With a Small Business Near You</h1>
          <span className='display-text'>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin in elit erat. Vestibulum
            et enim bibendum, molestie ex non, ullamcorper sapien.
            Curabitur eu metus mi. Maecenas ac sapien suscipit, aliquam
            tortor lacinia, pretium mauris.
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin in elit erat. Vestibulum
            et enim bibendum, molestie ex non.
          </span>
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
                  value={this.state.query}
                  onChange={this.update('query')}
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

        </div>
      </div>
    );
  }
}

export default LandingPage;
