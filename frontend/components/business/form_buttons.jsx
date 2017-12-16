import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class BusinessFormButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let bizLink = '/';
    let backButton =
      <p
        className="biz-form-button back"
        onClick={ this.props.history.goBack }>
        back
      </p>;
    let next =
      <span
        className="biz-form-button submit"
        onClick={ this.handleSubmit }>
        submit
      </span>;
    const path = this.props.location.pathname;
    if (path === '/associatebusiness/basic_info') {
      bizLink = '/associatebusiness/add_details';
      backButton = '';
      next =
        <Link className="biz-form-button continue" to={ bizLink }>
          Continue
        </Link>;
    } else if (path === '/associatebusiness/add_details') {
      bizLink = '/associatebusiness/photos';
      next =
        <Link className="biz-form-button continue" to={ bizLink }>
          Continue
        </Link>;
    }
    //  else if (path === '/associatebusiness/photos') {
    // }

    return (
      <div className="biz-form-buttons">
        <div className="left-buttons">
          { backButton }
        </div>
        <div className="right-buttons">
          <Link className="biz-form-button" to="/test">
            Save and exit
          </Link>
          { next }
        </div>
      </div>
    );
  }
}

export default withRouter(BusinessFormButtons);
