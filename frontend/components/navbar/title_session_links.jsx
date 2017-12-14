import React from 'react';
import AuthDropdown from './auth_dropdown';

class SessionLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authVisible: false
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown(e) {
    e.stopPropagation();
    let authVisible = this.state.authVisible ? false : true;
    this.setState({ authVisible });
  }

  render() {
    const authDropdownClass =
      this.state.authVisible ? "auth-dropdown" : "auth-dropdown hidden";

    return (
      <div className='session-links'>
        <a href="#" onClick={ this.toggleDropdown }>
          sign in
        </a>
        <AuthDropdown
          toggleDropdown={ this.toggleDropdown }
          class={ authDropdownClass }
          />
      </div>
    );
  }
}

export default SessionLinks;
