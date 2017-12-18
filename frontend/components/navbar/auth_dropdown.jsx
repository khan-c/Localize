import React from 'react';
import FaGoogle from 'react-icons/lib/fa/google';

class AuthDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleEsc = this.handleEsc.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.class === 'auth-dropdown') {
      document.addEventListener('click', this.handleOutsideClick);
      document.addEventListener('keydown', this.handleEsc);
    } else if (newProps.class === 'auth-dropdown hidden') {
      document.removeEventListener('click', this.handleOutsideClick);
      document.removeEventListener('keydown', this.handleEsc);
    }
  }

  handleOutsideClick(e) {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      if (this.wrapperRef.className === "auth-dropdown") {
        this.props.toggleDropdown(e);
      }
    }
  }

  handleEsc(e) {
    if (e.keyCode === 27) {
      this.props.toggleDropdown(e);
    }
  }

  setWrapperRef(el) {
    this.wrapperRef = el;
  }

  render() {
    return(
      <div
        className={ this.props.class }
        ref={ this.setWrapperRef }>
        <div className="auth-wrapper">
          <span>Login/Sign Up with:</span>
          <a href="/auth/google" id="google-auth">
            <FaGoogle />
            <p>Google</p>
          </a>
        </div>
      </div>
    );
  }
}

export default AuthDropdown;
