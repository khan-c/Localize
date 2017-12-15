import React from 'react';
import AuthDropdown from './auth_dropdown';

class UserLinks extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   authVisible: false
    // };
    //
    // this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  // toggleDropdown(e) {
  //   e.stopPropagation();
  //   let authVisible = this.state.authVisible ? false : true;
  //   this.setState({ authVisible });
  // }

  render() {

    return (
      <div className='session-links'>
        <a href="/#/associatebusiness/basic_info">
          associate with business?
        </a>
        <a href="/logout">log out</a>
      </div>
    );
  }
}

export default UserLinks;
