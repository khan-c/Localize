import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class BusinessFormButtons extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      name,
      phone,
      address1,
      address2,
      city,
      state,
      zip,
      about,
      mon,
      tue,
      wed,
      thu,
      fri,
      sat,
      sun,
      value
    } = this.props.businessDetails;
    const location = {
      address1,
      address2,
      city,
      state,
      zip
    };
    const contact = {
      phone
    };
    const availability = [mon, tue, wed, thu, fri, sat, sun].map((day,idx) => {
      const d = {};
      d['start'] = day.min;
      d['end'] = day.max;
      d['day'] = idx;
      return d;
    });
    const categories = value;
    const parseCity = city.split(" ").join("%20");
    this.props.fetchLatLng(parseCity)
      .then(results => {
        const coordinates = results.data.results[0].geometry.location;
        const business = {
          name,
          location,
          contact,
          availability,
          categories,
          business,
          about,
          is_claimed: true,
          coordinates
        };
        this.props.createBusiness(business);
        this.props.history.push('/');
      });
      // .then(this.props.history.push(`/business/${name}-localize`));
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
        <Link
          className="biz-form-button continue"
          to={ bizLink }>
          Continue
        </Link>;
    } else if (path === '/associatebusiness/add_details') {
      bizLink = '/associatebusiness/photos';
      next =
        <Link
          className="biz-form-button continue"
          to={ bizLink }>
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
          <span
            className="biz-form-button"
            onClick={ this.handleSubmit }>
            Save and exit
          </span>
          { next }
        </div>
      </div>
    );
  }
}

export default withRouter(BusinessFormButtons);
