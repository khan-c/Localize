import React from 'react';
import { NavLink, Route, Link, Switch, Redirect } from 'react-router-dom';
import Select from 'react-select';
import BusinessFormBasic from './form_basic_info';
import BusinessDetails from './form_details';
import BusinessFormButtons from './form_buttons';
import BusinessFormPhotos from './form_photos';
import MdClose from 'react-icons/lib/md/close';

class BusinessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      about: '',
      mon: { min: 8, max: 18 },
      tue: { min: 8, max: 18 },
      wed: { min: 8, max: 18 },
      thu: { min: 8, max: 18 },
      fri: { min: 8, max: 18 },
      sat: { min: 0, max: 0 },
      sun: { min: 0, max: 0 },
      value: []
    };


    this.bizModalClose = this.bizModalClose.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.handleEsc = this.handleEsc.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleEsc);
  }

  handleEsc(e) {
    if (e.keyCode === 27) {
      this.props.history.push("/");
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEsc);
  }

  updateForm(value) {
    const key = Object.keys(value)[0];
    this.setState({ [key]: value[key] });
  }

  bizModalClose(e) {
    if (e.target.className === 'business-modal') {
      this.props.history.push("/");
    }
  }

  render() {
    let header = 'Your Business';
    let faq1 = '';
    let faq2 = '';
    const path = this.props.location.pathname;
    if (path === '/associatebusiness/basic_info') {
      faq1 = 'Please provide contact information so big companies can find you!';
      faq2 = 'Type your provided services or products to let users know what you can do!';
    } else if (path === '/associatebusiness/add_details') {
      header = 'Details';
      faq1 = 'Tell us more about your business!';
      faq2 = 'Let users know your hours of operation or whether you deliver.';
    } else if (path === '/associatebusiness/photos') {
      header = 'Add Photos';
      faq1 = 'You can click to upload photos or drag and drop directly.';
      faq2 = 'You can remove photos before submitting your business.';
    }
    return (
      <div onClick={ this.bizModalClose } className="business-modal">
        <div className="business-page">
          <Link className="form-close" to="/"><MdClose /></Link>
          <div className="business-form-header">
            <div className="business-form-links">
              <NavLink
                to="/associatebusiness/basic_info"
                activeClassName="selected">
                Basic Info
              </NavLink>
              <NavLink
                to="/associatebusiness/add_details"
                activeClassName="selected">
                Details
              </NavLink>
              <NavLink
                to="/associatebusiness/photos"
                activeClassName="selected">
                Photos
              </NavLink>
            </div>
            <h3 className="business-form-title">{ header }</h3>
          </div>
          <div className="business-form-body">
            <div className="business-form-forms">
              <Switch>
                <Route path="/associatebusiness/basic_info"
                  render={ props => <BusinessFormBasic
                    updateForm={ this.updateForm }
                    {...this.state}
                    {...props} /> } />
                <Route path="/associatebusiness/add_details"
                  render={ props => <BusinessDetails
                    updateForm={ this.updateForm }
                    {...this.state}
                    {...props} /> } />
                <Route path="/associatebusiness/photos"
                  component={BusinessFormPhotos} />
              </Switch>
            </div>
            <div className="business-form-faq">
              <div className="faq">
                <h4>FAQ</h4>
                <span>{ faq1 }</span>
              </div>
              <div className="faq">
                <h4>FAQ</h4>
                <span>{ faq2 }</span>
              </div>
            </div>
          </div>
          <BusinessFormButtons
            createBusiness={ this.props.createBusiness }
            fetchLatLng={ this.props.fetchLatLng }
            businessDetails={ this.state }/>
        </div>
      </div>
    );
  }
}

export default BusinessForm;
